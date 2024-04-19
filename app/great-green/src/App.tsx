import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import { Outlet } from 'react-router-dom';
import theme from './theme';
import Authenticate from './components/Authenticate';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Authenticate>
        <Outlet></Outlet>
      </Authenticate>
    </ThemeProvider>
  )
}

export default App
