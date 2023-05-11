import React from 'react';
import ReactDOM from "react-dom/client";
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
const heading1 = React.createElement('h1', {id: 'heading', hello: 'world', key: 'h1'}, "Namaste Everyone!!!!");
const heading2 = <h1>Namaste React...</h1>;
// JSX => React.createElement => Object => html => render to DOM
const heading = (
  <h1 id='heading'
   key='h1'>
    Namaste React...
   </h1>
); /// JSX Expression

/// Name of component starts with capital letter
const HeadComponent = () => {
  return(
    <div>
      {heading}
      <h1>Namaste React</h1>
    </div>
   
  )
}
// calling component in this way also {HeadComponent()}
//Component composition - use Component inside component
// for jsx we need babel any way
// IS component hoisted ???? - 
// JSX mandatory - no
// ES6 mandatory - no
const HeadComponent1 = () => (
    <div>
      {console.log("yes")}
      {HeadComponent()}
      <h1>Namaste React</h1>
    </div>
    
)

 //  Bundler --- veet, parcel, webpack... --- minify your code, remove console
 /// Create React App using webpack and babel
 console.log(heading);
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<HeadComponent1 />);
//  root.render(HeadComponent1());