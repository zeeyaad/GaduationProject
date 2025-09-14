import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Landing/Home";
import Clubs from "./Pages/Clubs/Clubs";
import Membership from "./Pages/Membership/Membership";
import ContactUs from "./Pages/ContactUS/ContactUs";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Events from "./Pages/Events/Events";
import UserDashboard from "./Pages/User Dashboard/dashboard_page";
import User_Booking from "./Pages/User Booking/User_Booking";
import Staff_Dashboard from "./Pages/Staff Dashboard/Staff_Dashboard";
import Admin_Dashboard from "./Pages/Admin Dashboard/Admin_Dashboard";

export const routes = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/Clubs",
                element: <Clubs/>
            },
            {
                path: "/Membership",
                element: <Membership/>
            },
            {
                path: "/ContactUs",
                element:<ContactUs/>
            },
            {
                path: "/Login",
                element:<Login/>
            },
            {
                path: "/Register",
                element:<Register/>
            },
            {
                path: "/Events",
                element: <Events/>
            },
            {
                path: "/User_Dashboard",
                element: <UserDashboard/>
            },
            {
                path: "/User_Booking",
                element: <User_Booking/>
            },
            {
                path: "/Staff_Dashboard",
                element: <Staff_Dashboard/>
            },
            {
                path: "/Admin_Dashboard",
                element: <Admin_Dashboard/>
            }
        ],
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    }
]);
