import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { allProducts } from "../data";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../components/load/Loader";
import MessageIcon from "../components/message-icon/MessageIcon";
import {  SearchOutlined } from "@material-ui/icons";
import './css/productLust.css'
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;



const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  cursor: pointer;
  color: white;
`;
const ProductList = () => {
  const [input, setInput] = useState("")
  const [allProduct, setallProduct] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleButtonClick = (e) => {
    setOpenLoader(true);
    var filtered = allProduct.filter(product => 
      product.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredProducts(filtered);
    setTimeout(() => {
      setOpenLoader(false);
    }, 1000); 
  };
  const [openLoader, setOpenLoader] = useState(false)
  useEffect(() => {
    window.scrollTo(0,0)
    const randomNumber = Math.floor(Math.random() * (2200 - 1000 + 1)) + 1000;
    setOpenLoader(true);
    const timer = setTimeout(() => {
      setOpenLoader(false);
    }, randomNumber); 
    setallProduct(allProducts)
    setFilteredProducts(allProducts)
    return () => {
      clearTimeout(timer); 
    
    };
  }, []);

  return (
    <div className={openLoader?"hello-world":""}>
    {openLoader&&<Loader />}
    
    <Container>
      <Navbar />
      <Announcement />
      <div className="search-container">
      <InputContainer>
        <Input placeholder="ค้นหา" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <Button onClick={handleButtonClick}>
          <SearchOutlined  />
        </Button>
      </InputContainer>
      </div>
      <Products props={filteredProducts}/>
      <Newsletter />
      <Footer />
      <MessageIcon/>
    </Container>
    </div>
  );
};

export default ProductList;
