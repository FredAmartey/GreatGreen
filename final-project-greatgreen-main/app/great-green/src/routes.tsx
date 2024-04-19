import { createBrowserRouter } from "react-router-dom";
import App from "./App";



const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            /*{
                Component: Div,
                index: true
            },*/
            /*{
                path: '/user/:id',
                Component: Div
            }*/
        ]
    }
]);

export default router;