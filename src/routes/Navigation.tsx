
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    createBrowserRouter,
    RouterProvider,
    NavLink,
    Navigate
} from "react-router-dom";

import { routes } from './routes';
import logo from "../logo.svg";
import { Suspense } from "react";
export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="logo" />
                        <ul>
                            { /* TODO: dynbamic Navlinks */}
                            {
                                routes.map((route) => {
                                    return (
                                        <li >
                                            <NavLink to={route.path} className={({ isActive }) => isActive ? 'nav-active' : ''}>{route.name}</NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {routes.map(({ to, path, component: Component }
                        ) => {
                            return (
                                <Route key={to} path={path} element={<Component />} />
                            )
                        })}


                        <Route path="*" element={<Navigate to={routes[0].to} />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>

    );
};
