import Models from '../models/index.js';
import passport from 'passport';
import validators from "../validators/index.js";
import { InternalServerError, Unauthorized, ValidationError, validateSchema } from '../utility.js';
import { setError, setResponse } from './response-handler.js';
import badgeService from '../services/badge-service.js';

export const register = (req, response, next) => { 
  // Get details 
  let userData = {};
  try {
    userData = validators.auth.registerUserSchema.validateSync(req.body);
  } catch (e) {
    ValidationError(e.errors[0], {others: e.errors});
  }

  Models.User.register({
    username: userData.email,
    name: userData.name,
    gender: userData.gender,
    locationX: userData.locationX,
    locationY: userData.locationY,
    email: userData.email
  },
  userData.password,
  ).then(function (user) {        
    passport.authenticate("local") 
    (req, response, function() { 
      setResponse({message: "User authenicated successfully !", user: userData}, response);
    });
  }).catch((err) => {
    next(ValidationError(err.message || "Failed to authenicate", {}, false));
  });
};


export const logout = (req, response, next) => {
  req.logout(function(err) {
    if (err) { return next(InternalServerError("Failed to logout please try again", {}, false)); }
    setResponse({message: "Logout successful !"}, response);
  });
}


export const login = (req, res, next) =>  {
  
  const userToBeChecked = new Models.User({ 
    username: req.body.username, 
    password: req.body.password, 
  }); 
  
  req.login(userToBeChecked, function (err) { 
    if (err) {
      Unauthorized("Failed to authenticate user");
    } else { 
      passport.authenticate("local")( 
        req, res, function () { 
          Models.User.find({username: req.user.username}).then(
            () => {
              // Login is successful
              setResponse({message: "Login Successful !"}, res);
            }
          ).catch((err) => {
            next(Unauthorized("Invalid credentials provided !", {}, false));
          })
          
      }); 
    } 
  }); 
};


export const userinfo = async (req, res, next) =>  {
  const userResponse = await getUserResponse(req.user);
  setResponse(userResponse, res);
};

const getUserResponse = async (user) => {
  const userBadges = [];
  for(const badgeData of user.badges) {
    const badge = await badgeService.find(badgeData.badge_id);
    if (badge) {
      userBadges.push({
        _id: badge._id,
        name: badge.name,
        logo: badge.logo,
        achieved_on: badgeData.createdDate
      });
    }
  }
  return {
    name: user.name,
    username: user.username,
    email: user.email,
    locationX: user.locationX,
    locationY: user.locationY,
    gender: user.gender,
    badges: userBadges
  }
}


export const updateUser = async (request, response) => {
  try {
    const requestBody = {...request.body}
    const userData = validateSchema(validators.auth.updateUserSchema, requestBody);
    if(userData.password) {
      request.user.setPassword(userData.password);
    }
    if(userData.name) {
      request.user.name = userData.name;
    }
    const updatedUser = await request.user.save();
    
    const userResponse = await getUserResponse(updatedUser);
    setResponse({
      message: "Profile updated !",
      user: userResponse
    }, response)
  } catch (e) {
    console.log(e);
    setError(e, response);
  }
};
