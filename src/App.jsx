import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './app2/Components/LayOut/LayOut';
import Home from './app2/Components/Home/home';
import About from './app2/Components/About/about';
import Gallery from './app2/Components/Gallery/gallery';
import Testimonial from './app2/Components/Testimonial/testimonial';
import Contact from './app2/Components/Contact/contact';
import Artist from './app2/Components/Artist/artist';

const routes = createBrowserRouter([{
 path:"", element:<LayOut/>,children:[
  {path:"home",element:<Home/>},
  {path:"about",element:<About/>},
  {path:"gallery",element:<Gallery/>},
  {path:"testimonial",element:<Testimonial/>},
  {path:"contact",element:<Contact/>},
  {path:"artist",element:<Artist/>},
  
 ]
}])

const App = () => {
  return (
    <>
      <RouterProvider router={routes}>

      </RouterProvider>
    </>
  );
}

export default App;
