import React from "react";
import { ReactDOM } from "react";

import { createRoot } from "react-dom/client";
import { Router, Route, Routes, createBrowserRouter, RouterProvider, Link, BrowserRouter } from "react-router-dom";
import Admin from "./Admin";

const root = createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={router}>
        <Routes>
            <Route path="/admin" element={<Admin />} />
        </Routes>
    </RouterProvider>
);