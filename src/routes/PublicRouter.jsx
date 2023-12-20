import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";

const PublicRouter = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/auth",
        element: <Auth />
    }
];

export default PublicRouter;