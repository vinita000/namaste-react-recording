import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header, { Title } from "./components/Header"; // default and named import
import Footer from "./components/Footer";
import Body from "./components/Body";
// import About from '../src/components/About';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ResturantMenu from "./components/ResturantMenu";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
// import Instamart from './components/Instamart';

// const heading = React.createElement('h1', null, "Namaste Everyone Recording!!!!");

/**
  * Hot  Module Replacement- HMR
  * File Watchers Algo
  * Bundling
  * Minifying
  * Cleaning our code / remove console
  * Manages dev and prod build
  * Super fast build algo
  * Image OPtimization
  * caching while development
  * compression
  * takes care of older version of browser
  * to eanble HTTPS on dev env. ---- npx parcel index.html --htpps
  * manages port number also
  * consistent hashing Algo that parcel uses to chache
  * zero config bundler - that means it is required 0 configuration
  * Tree shaking - removing unwanted code. - suppose we have library which has 10 functions and we use only 2 then all 8 are ingnored by parcel.
  * 
  * Transitive dependencies

*/

/**
   * Header
    * Logo
    * Nav items(right side)
    * Cart
    * Body
    * Search Bar
    * Resturant list
      * Resturant card
        * Name
        * Image
        * Cuisines
        * Rating
    * Footer
    `* Links
    `* Copyright 
  */

// React.Fragment is a component which is provided by 'react
// JSX can only have one parent
//We can use React.Fragment inside React.Fragment
// you pass argument
// you receive parameters

// props = properties
// I want my header footer comes in all pages and for all otthers pages come from outlet

//One bundle will not be ggod for large application
// how we split bundler
//Chunking
//dynamic bundling
//code splitting
//lazy loading
// For large scale application we use different bundle accoring to usecase
// For example we we load one component then only one component bunle load will not load other component bundle we do in chunk
// this is also known as ondemand loading
// dynamic import
//for example in Swiggy Instamart is different bundle

// Now will do dynamic importing using lazy() or ondemand import or code splitting or bundle chunking
const Instamart = lazy(() => import("./components/Instamart")); // which gives dynamic importing
//Upon On loading -> upon render -> react will suspend the loading

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  // const About = lazy(() => import('./components/About'));    ---------->  Never do this..............
  const [userInfo, setUserInfo] = useState({
    name: "Namaste React1",
    email: "support@namastedev.com",
  });

  useEffect(() => {
    setUserInfo(userInfo);
  }, []);

  return (
    // It overrides the default value of context
    <userContext.Provider value={{ user: userInfo, setUserInfo: setUserInfo }}> 
      <React.Fragment>
        <Header />
        {/* <About />
        <Contact />
        <Body /> //Outlet - the content inside outlet, outlet render according to routes
        <Cart /> */}
        <Outlet />
        <Footer />
      </React.Fragment>
    </userContext.Provider>
  );
};
// createBrowserRouter is a function
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Please wait a moment...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile", /// '/profile' ---> It means react router dom think http://localhost:3000/profile
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/resturants/:id",
        element: <ResturantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ), // fallback will show shiffer effect until and unless our instamart load
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//  root.render(HeadComponent1());

/**
 * AppLayout
 *    - userInfo - as state
 *    -<Body userInfo={userInfo} />
 *        -<RestroCard userInfo />
 *              -{userInfo}
 * --- This is known as PROPS DRILLING -- From parent to child to child
 */
