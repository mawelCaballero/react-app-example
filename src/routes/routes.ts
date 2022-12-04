import { lazy, LazyExoticComponent } from "react";
import { JsxAttribute } from "typescript";
import { LazyPage01, LazyPage02, LazyPage03 } from "../01-lazyload/pages";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
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

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: 'LazyLayout'*/ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    to: "/lazy/",
    path: "lazy/*",
    component: LazyLayout,
    name: "Lazy",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    component: NoLazy,
    name: "No lazy",
  },
];
