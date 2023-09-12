import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { popularProducts } from "../data";
import Announcement from "../components/Announcement";
import Loader from "../components/load/Loader";
import './../components/css/test.css'
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [openLoader, setOpenLoader] = useState(false)
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * (2800 - 1000 + 1)) + 1000;
    setOpenLoader(true);
    const timer = setTimeout(() => {
      setOpenLoader(false);
    }, randomNumber); 
    return () => {
      clearTimeout(timer); 
    };
  }, []);
  


  return (
    <div className={openLoader?"hello-world":""}>
    {openLoader&&<Loader />}
    
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products props={popularProducts}/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
