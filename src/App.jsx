import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

import { HashRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {



  return (
    
    <Router>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/products" element={<ProductList />} />
    </Routes>
  </Router>
    
  );
};

export default App;