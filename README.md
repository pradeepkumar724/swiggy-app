# Namaste React

# Parcel

- Dev Build
- Local Server
- HMR = Hor Module Replacement (Automatically Refresh)
- File Watching Algorithum - written in C++
- Caching - Faster Build
- Image Optimization
- Minification(production)
- Bundling(production)
- Compress(production)
- Consistant Hashing
- Code Spliting
- Differential Bundling - support older browsers (when app is hosting your app can be open internet exploror(old version) parcel takes care run smootly also support older verson exploror)
- Diagnostic(display in terminal)
- Error Handling(good error meaningd give)
- HTTPs (also provide)
- Tree Shaking - remove unused code
- Different dev and prod Bundler

<!-- import React from 'react';
import  ReactDOM  from 'react-dom/client';

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
 [React.createElement("h1",{},"This is Namaste React"),React.createElement("h2",{},"I'am the H2 Tag!")]
 ),React.createElement("div",{id:"child2"},
 [React.createElement("h1",{},"I'am the H1 Tag!"),React.createElement("h2",{},"I'am the H2 Tag!")]
 )]
);
console.log(parent);//return object

const root = ReactDOM.createRoot(document.getElementById("root"));//Assignn a root inside react
root.render(parent);//this renderm takes object and get convert to html Element browser understanding tag to the page.   -->

// jsx (transpiled brfore it reaches the js) - PRACEL - Bable
// jsx => React.createElement => reactElement-js(Object) => HTMLElement(render)

/\*\*

- Header
- - logo
- - links
- Body
- - search
- - restaurantcontainer
- - res card
-      -img
-      -cusine
-      -time
-      -rating
- Footer
- \*/

 <!-- Exports -->

Default Exports:
export default componentName;
import name from 'path'

Named Export:
export const variableName;
import {variableName} from 'path'



# 2types routing in webapps
- Client Side Routing
- Server Side Routing

# 3 Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our Store
- Connetct our Store to app
- Slice(cartSlice)
- dispatch(action)
- selector#   s w i g g y - a p p  
 