import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dash/Dashboard";
import Main from "../layout/Main/Main";
import RequestOrganizer from "../pages/RequestOrganizer/RequestOrganizer";
import About from "../pages/about/About";
import Events from "../pages/allEvents/Events";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Booking from "../pages/bookings/Booking";
import Contact from "../pages/contact/Contact";
import CustomEvent from "../pages/customEvent/CustomEvent";
import DashboardHome from "../pages/dashboard/Home/DashboardHome";
import OrganizerRequest from "../pages/dashboard/OrganizerRequest/OrganizerRequest";
import DashboardAdminHome from "../pages/dashboard/admin/Home/DashboardAdminHome";
import AddEvent from "../pages/dashboard/admin/events/AddEvent";
import UpdateEvent from "../pages/dashboard/admin/events/UpdateEvent";
import Settings from "../pages/dashboard/admin/settings/Settings";
import Profile from "../pages/dashboard/profile/Profile";
import ErrorPage from "../pages/error/ErrorPage";
import EventDetails from "../pages/eventDetails/EventDetails";
import Home from "../pages/home/Home";
import PaymentPage from "../pages/payment/PaymentPage";
import Portfolio from "../pages/portfolio/Portfolio";
import Schedule from "../pages/schedule/Schedule";
import Shop from "../pages/shop/Shop";
import AdminRouter from "./AdminRoute";

import Cart from "../pages/dashboard/userDashboard/cart/cart";
import UserBookings from "../pages/dashboard/userDashboard/userBookings/UserBookings";
import Wishlist from "../pages/dashboard/userDashboard/wishlist/Wishlist";

import AllUsers from "../pages/dashboard/admin/users/AllUsers";
import EditUser from "../pages/dashboard/admin/users/EditUser";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/booking",
                element: <Booking />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/schedule",
                element: <Schedule />,
            },
            {
                path: "/schedule",
                element: <Schedule />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/events",
                element: <Events />,
            },
            {
                path: "/event-details/:_id",
                element: <EventDetails />,
            },
            {
                path: "/shop",
                element: <Shop></Shop>,
            },
            {
                path: "/create-your-event",
                element: <CustomEvent />,
            },
            {
                path: "/payment/:_id",
                element: <PaymentPage />,
            },
            {
                path: "/request-organizer",
                element: <RequestOrganizer />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ),
        children: [
            {
                path: "/dashboard",
                element: (
                    <PrivateRoute>
                        <DashboardHome />
                    </PrivateRoute>
                ),
            },
            {
                path: "addEvent",
                element: (
                    <PrivateRoute>
                        <AddEvent />
                    </PrivateRoute>
                ),
            },
            {
                path: "updateEvent",
                element: (
                    <PrivateRoute>
                        <UpdateEvent />
                    </PrivateRoute>
                ),
            },
            {
                path: "settings",
                element: (
                    <PrivateRoute>
                        <Settings />
                    </PrivateRoute>
                ),
            },
            {
                path: "profile",
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                ),
            },
            {
                path: "organizer-request",
                element: (
                    <PrivateRoute>
                        <OrganizerRequest />
                    </PrivateRoute>
                ),
            },
            {
                path: "admin",
                element: (
                    <AdminRouter>
                        <DashboardAdminHome />
                    </AdminRouter>
                ),
            },
            {
                path: "wishList",
                element: (
                    <PrivateRoute>
                        <Wishlist />
                    </PrivateRoute>
                ),
            },
            {
                path: "userBooking",
                element: (
                    <PrivateRoute>
                        <UserBookings />
                    </PrivateRoute>
                ),
            },
            {
                path: "cart",
                element: (
                    <PrivateRoute>
                        <Cart />
                    </PrivateRoute>
                ),
            },
            {
                path: "all-users",
                element: (
                    <AdminRouter>
                        <AllUsers />
                    </AdminRouter>
                ),
            },
            {
                path: "edit-user/:id",
                loader: ({ params }) =>
                    fetch(
                        `https://dream-craft-server.vercel.app/user/${params.id}`,
                        { method: "POST" }
                    ),
                element: (
                    <AdminRouter>
                        <EditUser />
                    </AdminRouter>
                ),
            },
        ],
    },
]);

export default Router;
