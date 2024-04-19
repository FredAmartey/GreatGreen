import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { Box, Paper, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Formik} from 'formik';
import { loginValidationSchema } from '../constants';
import LoginForm from '../components/LoginForm';
import { LoginFormInput } from '../models/login';
import { login } from '../utils/api';
import Authenticate from '../components/Authenticate';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const itemData = [
    {
      img: "desert.webp",
      title: "Phase 1"
    },
    {
      img: "leaves.jpeg",
      title: "Phase 2"
    },
    {
      img: "vegitation.jpeg",
      title: "Phase 3"
    },
  ];

  const handleSubmit = async (values:LoginFormInput) => {
    alert(JSON.stringify(values, null, 2));
    const successRedirect = () => { navigate("/home")};
    await login(values, successRedirect);
  }
  return (
    <ThemeProvider theme={theme}>
      <Authenticate loginPage >
      <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} flexWrap={"wrap"}>
        <div>
          <Typography fontWeight={"bold"} variant='h1'>
            Login
          </Typography>
          <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <Paper variant='outlined' sx={{margin: "44px", backgroundColor: "#f0f0f0"}}  square={false} >
          <Formik 
            initialValues={{username: "", password: ""}} 
            onSubmit={handleSubmit} 
            validationSchema={loginValidationSchema} 
            children={LoginForm}
          >
          </Formik>
        </Paper>
      </Box>
      </Authenticate>
    </ThemeProvider>
  )
}

export default Login;
