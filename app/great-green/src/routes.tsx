import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Journey from "./pages/Journey";
import Welcome from "./pages/Welcome";
import Experience from "./pages/SelectExperience";
import AssignKit from "./pages/AssigningKit";

const router = createBrowserRouter([
  {
    path: "/home",
    Component: App,
    children: [
      {
        Component: Journey,
        index: true,
      },
      /*{
                path: '/user/:id',
                Component: Div
            }*/
    ],
  },
  {
    path: "/login",
    Component: Login,
    children: [
      {
        Component: Login,
        index: true,
      },
      /*{
                path: '/user/:id',
                Component: Div
            }*/
    ],
  },
  {
    path: "/welcome",
    Component: Welcome,
  },
  {
    path: "/select-experience",
    Component: Experience,
  },
  {
    path: "/assign-kit",
    Component: AssignKit,
  },
]);

export default router;
