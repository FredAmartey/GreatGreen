import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from './pages/Login';
import Journey from "./pages/Journey";



const router = createBrowserRouter([
    {
        path: '/home',
        Component: App,
        children: [
            {
                Component: Journey,
                index: true
            },
            /*{
                path: '/user/:id',
                Component: Div
            }*/
        ]
    },
    {
        path: '/login',
        Component: Login,
        children: [
            {
                Component: Login,
                index: true
            },
            /*{
                path: '/user/:id',
                Component: Div
            }*/
        ]
    }
]);

export default router;