import Home from "../pages/Home/Home/Home";

import MainLayout from "../layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ] 
    }
])
export default router;