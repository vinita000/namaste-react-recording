import React from 'react'; 
import ReactDOM from "react-dom/client";
import Header, { Title } from './components/Header' // default and named import
import Footer from './components/Footer';
import Body from './components/Body';
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
 
const AppLayout = () => {
  return(
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  )
}

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout />);
//  root.render(HeadComponent1());