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
  * 
  * 
  * Transitive dependencies





 */
 const heading = React.createElement('h1', {id: 'heading', hello: 'world'}, "Namaste Everyone Recording!!!!");
 //  Bundler --- veet, parcel, webpack... --- minify your code, remove console
 /// Create React App using webpack and babel
 console.log(heading);
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);