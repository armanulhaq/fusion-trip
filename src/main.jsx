import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CreateTrip from "./create-trip";
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/custom/Header";
import { RouterProvider } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/create-trip",
        element: <CreateTrip />,
    },
]);
createRoot(document.getElementById("root")).render(
    <>
        <Header />
        <RouterProvider router={router} />
    </>
);
