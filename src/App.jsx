/* eslint-disable react/jsx-no-constructed-context-values */
import { Route, Routes /* useParams */ } from 'react-router-dom';
// import Categories from "./components/categories/categories.component";
import React from 'react';
import Home from './routes/home/home.component';
import Navgiagtion from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.compoonent';
import Checkout from './routes/checkout/checkout.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navgiagtion />}>
        <Route path="" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
