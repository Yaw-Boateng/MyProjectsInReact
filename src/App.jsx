import { createBrowserRouter, RouterProvider } from "react-router";
import Counter from "./Counter";
import Clock from "./Clock";
import TodoUI from "./Todo";
import GroceryApp from "./GroceryApp";
import QuoteGenerator from "./QuoteGenerator";
import Home from "./Home";
import NotFound from "./NotFound";

const myApps = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/counter", element: <Counter /> },
  { path: "/clock", element: <Clock /> },
  { path: "/todo-list", element: <TodoUI /> },
  { path: "/grocery-app", element: <GroceryApp /> },
  { path: "/quote-generator", element: <QuoteGenerator /> },
  { path: "*", element: <NotFound /> },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={myApps} />
    </>
  );
}
