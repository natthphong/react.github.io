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
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const [openLoader, setOpenLoader] = useState(false)
  useEffect(() => {
    window.scrollTo(0,0)
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
  
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products props={allProducts}/>
      <Newsletter />
      <Footer />
      <MessageIcon/>
    </Container>
    </div>
  );
};

export default ProductList;
