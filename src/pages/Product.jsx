import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { useState } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
  max-width: 600px;
  word-wrap: break-word;
  line-height: 1.7;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;





export default function Product (){
  const navigate = useNavigate();
  const location = useLocation();
  const [product ,setProduct] = useState({})
  useEffect(() =>  {
    window.scrollTo(0,0)
   
    
  
    window.scrollTo(0,0);
    
    const check = async ()=>{
      const item = await location.state;
      console.log(item === null);
      if (item === null || item === undefined) {
        console.log("first2");
        navigate("/");
      }
      setProduct(item)
    }
    check()
    
  
  }, []); 

  return (
    <Container>
    <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img || "https://github.com/natthphong/images/blob/main/default/1.png?raw=true"} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title || "title"}</Title>
          <Desc>
            {product.desc || "Desc"}
          </Desc>
          <Price>{product.price || "0"} บาท</Price>
          
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
     
    </Container>
  );
};









