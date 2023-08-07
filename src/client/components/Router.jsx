import React from "react";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { StaticRouter } from "react-router-dom/server";

import DrawingBoard from "../containers/DrawingBoard";
import Admin from "../containers/Admin";


const ROUTES = [
    {
        path: "/",
        Component: DrawingBoard,
        options: {
            menu: false,
        },
    },
    {
        path: "/admin",
        Component: Admin,
        options: {
            menu: false,
        },
    },
];

const Redirect = ({ to }) => {
    const navigate = useNavigate();
    React.useEffect(() => {
        navigate(to, { replace: true });
    }, [navigate, to]);
    return null;
};

export default function Router(props) {
    const { location } = props;

    const ComponentRouter = __isBrowser__ ? BrowserRouter : StaticRouter;
    return ( 
            <ComponentRouter location={location}>
                <Routes>
                    {ROUTES.map(({ path, Component, options }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <>
                                    {options?.menu && <h1>Menu</h1>}

                                    <Component />
                                </>
                            }
                        ></Route>
                    ))}
                    <Route path="*" element={<Redirect to="/" />}></Route>
                </Routes>
            </ComponentRouter>
    );
}
