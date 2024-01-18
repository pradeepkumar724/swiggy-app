/**
 * 
 * <div id ="parent">
 *      <div id="child">
 *          <h1>I'am the H1 Tag!</h1>
 *      </div>
 * </div>
 * 
 * 
 * 
 * React.creatElement(object) => HTML(Browser understand)
 * 
 * 
 */

const parent = React.createElement("div",{id:"parent"},
 [React.createElement("div",{id:"child1"},
 [React.createElement("h1",{},"I'am the H1 Tag!"),React.createElement("h2",{},"I'am the H2 Tag!")]
 ),React.createElement("div",{id:"child2"},
 [React.createElement("h1",{},"I'am the H1 Tag!"),React.createElement("h2",{},"I'am the H2 Tag!")]
 )]
);
console.log(parent);//return object 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);//this renderm takes object and get convert to html Element browser understanding tag.
