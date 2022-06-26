
`npm i -D sass` make sure to restart the server


# REACT-ROUTER-DOM
`npm i react-router-dom` v6
### wrap the App compo within a BrowsersRouter inside index.jsx file, 
``` <BrowserRouter>
      <App/>
    </BrowserRouter>
```
### then inside App component file wrap all the routable components  with in <Routes> and then pass a path and element to <Route>  
``` <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
```
### outlet component from react-router-dom
for nested paths you can use outlet,
1. make sure you import Outlet from react-router-dom
2. return Outlet in, if uou put it on top of your component it will be displayed on the dom on the top, and if you put in underneath it will be displayed underneath teh component on the dom
3. make sure to nest your component before you close Route component
```
////// Home component file //////
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Directory/> 
            <Outlet/>
        </div>
    );
}

////// App component file //////
const App =()=> {
  return (
    <Routes>
      <Route path='/' element={<Home/>}>
       <Route path='/shop' element={<Shop/>}/>
      </Route>
    </Routes>
  );
}
```