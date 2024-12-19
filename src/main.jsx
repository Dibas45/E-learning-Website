import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';  
import { store } from './store/Store.js';   
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import Mock from './Pages/Mock';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
        <Footer/>
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar />
        <About />
        <Footer/>
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer/>
      </>
    ),
  },
  {
    path: '/courses',
    element: (
      <>
        <Navbar />
        <Courses />
        <Footer/>
      </>
    ),
  },
  {
    path: '/mocktest',
    element: (
      <>
        <Navbar />
        <Mock/>
        <Footer/>
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <Navbar />
        <Login />
        <Footer/>
      </>
    ),
  },
  {
    path: '/signup',
    element: (
      <>
        <Navbar />
        <Signup />
        <Footer/>
      </>
    ),
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> 
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
