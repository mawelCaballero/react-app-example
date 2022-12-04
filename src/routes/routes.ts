import { lazy, LazyExoticComponent } from "react";
import { JsxAttribute } from "typescript";
import { LazyPage01, LazyPage02, LazyPage03 } from "../01-lazyload/pages";
export type JSXElement = () => JSX.Element;

export interface Route {
  path: string;
  to: string;
  name: string;
  component: LazyExoticComponent<JSXElement> | JSXElement;
}

const Lazy1 = lazy(
  () =>
    import(/* webpackChunkName: 'LazyPage1'*/ "../01-lazyload/pages/LazyPage01")
);
const Lazy2 = lazy(
  () =>
    import(/* webpackChunkName: 'LazyPage2'*/ "../01-lazyload/pages/LazyPage02")
);
const Lazy3 = lazy(
  () =>
    import(/* webpackChunkName: 'LazyPage3'*/ "../01-lazyload/pages/LazyPage03")
);

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    component: Lazy1,
    name: "Lazy Page 01",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    component: Lazy2,
    name: "Lazy Page 02",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    component: Lazy3,
    name: "Lazy Page 03",
  },
];
