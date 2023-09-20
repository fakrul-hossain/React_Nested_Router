import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contract from "./components/Contract/Contract";
import Portfolio from "./components/Portfolio/Portfolio";
import Team from "./components/Team/Team";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import Posts from "./components/Posts/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path : '/about',
        element: <About></About>
      },
      {
        path: '/contract',
        element: <Contract></Contract>
      },
      {
        path: '/portfolio',
        element: <Portfolio></Portfolio>
      },{
        path: '/team',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),

        element: <Team></Team>
      },
      {
        path: '/team/:teamId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users${params.teamId}`),
        element: <TeamDetails></TeamDetails>
      },//{
      //   path: '/posts',
      //   loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
      //   element: <Posts></Posts>
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);