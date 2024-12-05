import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CreateTrip from "./create-trip";
import ViewTrip from "./view-trip/[tripID]";
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/custom/Header";
import { RouterProvider } from "react-router";
import { Toaster } from "@/components/ui/sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/create-trip",
        element: <CreateTrip />,
    },
    {
        path: "/view-trip/:tripID",
        element: <ViewTrip />,
    },
]);
createRoot(document.getElementById("root")).render(
    <>
        <GoogleOAuthProvider clientId="632652638305-0ph8ee12isra39abvdt4vnjk361s1hlp.apps.googleusercontent.com">
            <Header />
            <Toaster position="bottom-left" />
            <RouterProvider router={router} />
        </GoogleOAuthProvider>
    </>
);
