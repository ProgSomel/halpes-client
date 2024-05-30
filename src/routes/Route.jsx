import Home from "../pages/Home/Home/Home";

import MainLayout from "../layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddVolunteer from "../pages/AddVolunteer/AddVolunteer";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: "/addVolunteer",
                element: <PrivateRoute>
                    <AddVolunteer></AddVolunteer>
                </PrivateRoute>
            }
        ] 
    }
])
export default router;