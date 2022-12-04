import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage01, LazyPage02, LazyPage03 } from "../pages";

export const LazyLayout = () => {
    return (
        <div>
            <h1>Lazy Layout</h1>

            <ul>
                <li><NavLink to="lazy01">Lazy Page 01</NavLink></li>
                <li><NavLink to="lazy02">Lazy Page 02</NavLink></li>
                <li><NavLink to="lazy03">Lazy Page 03</NavLink></li>
            </ul>

            <Routes>
                <Route path="lazy01" element={<LazyPage01 />} />
                <Route path="lazy02" element={<LazyPage02 />} />
                <Route path="lazy03" element={<LazyPage03 />} />
                {/* <Route path="*" element={<h1>Not found</h1>} /> */}
                <Route path="/*" element={<Navigate replace to="lazy01" />} />
            </Routes>
        </div>
    )
}

export default LazyLayout;
