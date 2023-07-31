import React from "react";

import { createRoot } from "react-dom/client";
import { Router, Route, Routes, createBrowserRouter, RouterProvider, Link, BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Admin from "../admin/Admin.jsx";
//import 98.css
import "98.css";

window.addEventListener("selectstart", (event) => {
    event.preventDefault();
});

//rendering the app
const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
    {
        path: "/",
        loader: App,
    },
    {
        path: "/admin",
        component: Admin,
    },
]);

root.render(
    <RouterProvider router={router}>

        </RouterProvider>
);
