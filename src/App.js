import React from 'react'; 
import ReactDOM from "react-dom/client";
import Header, { Title } from './components/Header' // default and named import
import Footer from './components/Footer';
import Body from './components/Body';
import About from '../src/components/About';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Error from './components/Error';
import Contact from './components/Contact'
import Cart from './components/Cart'
import ResturantMenu from './components/ResturantMenu'
import Login from './components/Login';

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
const AppLayout = () => {
  return(
    <React.Fragment>
      <Header />
      {/* <About />
      <Contact />
      <Body /> //Outlet - the content inside outlet, outlet render according to routes
      <Cart /> */}
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}
// createBrowserRouter is a function
const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Body />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/resturants/:id',
          element: <ResturantMenu />
        },
        {
          path: '/login',
          element: <Login />
        }
      ]
    }
  ]
)

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter} />);
//  root.render(HeadComponent1());