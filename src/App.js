import { Route, Routes /*useParams */ } from "react-router-dom";
// import Categories from "./components/categories/categories.component";
import Home from "./routes/home/home.component";
import Navgiagtion from "./routes/navigation/navigation.component";
const Shop = () => {
  return <p>I am a shop page</p>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navgiagtion />}>
        <Route path="" element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
