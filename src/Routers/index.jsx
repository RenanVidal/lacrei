import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import User from '../pages/UserPerson';

const Routers = createBrowserRouter ([
    {
        path: '/',
        element: <Home />,
        children: [
            {
            path: '/user-person',
            element: <User />
            }
        ], 
    },
]);

createBrowserRouter(Routers, {
    basename: "/user-person",
  });

  <Link to = '/user-person'/>

  export default Routers;
