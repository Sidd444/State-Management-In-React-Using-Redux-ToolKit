import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Payment from './components/Payment';
import './App.css'
import { Provider } from 'react-redux'
import { store } from './Features/Shoes/store.js';

const Root = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<App />} />
        <Route path='/payment' element={<Payment />} />
      </>
    )
  );


  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
