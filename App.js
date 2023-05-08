 // const heading = React.createElement('h1', null, "Namaste Everyone Recording!!!!");
 const heading = React.createElement('h1', {id: 'heading'}, "Namaste Everyone Recording!!!!");
 console.log(heading);
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);