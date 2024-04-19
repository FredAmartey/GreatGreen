import axios from 'axios';
const HOST_URL = "http://localhost:3000/api/v1/"
const  getURL = (path: string) => (`${HOST_URL}${path}`) 


export const getUser = async (params={}) => {
  const userInfo = await axios.get(getURL("/auth/userinfo"), {params})
  return userInfo;
}
