import { Route, Routes /* useParams */ } from 'react-router-dom';
// import Categories from "./components/categories/categories.component";
import React from 'react';
import Home from './routes/home/home.component';
import Navgiagtion from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

function Shop() {
  return <p>I am a shop page</p>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navgiagtion />}>
        <Route path="" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
