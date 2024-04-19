import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import { Outlet } from 'react-router-dom';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet></Outlet>
    </ThemeProvider>
  )
}

export default App
