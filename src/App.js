import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
import About from './About';
import Contactus from './Contactus';
import Error from './Error';
import RestaurentMenu from './RestaurentMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Shimmer from './Shimmer';
//import Grocery from './Grocery';

const Grocery = lazy(() => import('./Grocery'));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contactus',
        element: <Contactus />,
      },
      {
        path: '/restaurentmenu/:resId',
        element: <RestaurentMenu />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
