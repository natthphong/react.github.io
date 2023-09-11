import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { popularProducts } from "../data";

const Home = () => {
  return (
    <div>
    
      <Navbar />
      <Slider />
      <Categories />
      <Products props={popularProducts}/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
