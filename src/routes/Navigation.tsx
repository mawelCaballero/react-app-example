
import { BrowserRouter, Routes } from "react-router-dom";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    NavLink,
    Navigate
} from "react-router-dom";

import { LazyPage01, LazyPage02, LazyPage03 } from "../01-lazyload/pages";

import logo from "../logo.svg";
export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="logo" />
                    <ul>
                        <li>
                            <NavLink to="/page1" className={({ isActive }) => isActive ? 'nav-active' : ''}>Page1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/page2" className={({ isActive }) => isActive ? 'nav-active' : ''}>Page2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/page3" className={({ isActive }) => isActive ? 'nav-active' : ''}>Page3</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="page1" element={<LazyPage01 />} />
                    <Route path="page2" element={<LazyPage02 />} />
                    <Route path="page3" element={<LazyPage03 />} />
                    <Route path="/*" element={<Navigate to="/page1" replace />} />



                </Routes>

            </div>
        </BrowserRouter>
    );
};
