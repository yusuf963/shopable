import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.scss';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider, CartProvider } from './context/user.context'
import { ProductProvider } from './context/product.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
