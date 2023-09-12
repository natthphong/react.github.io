import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../components/load/Loader";

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
  ${mobile({ height: "40vh" ,objectFit: "cover"})}
`;
// object-fit: cover;

const InfoContainer = styled.div`
  flex: 1;
  max-width: 50%;
  padding: 0px 50px;
  ${mobile({ 
    padding: "10px",
    maxWidth: "100%"
  })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
  word-wrap: break-word;
  line-height: 1.7;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;





export default function Product (){
  const [openLoader, setOpenLoader] = useState(false)
 
  
  const navigate = useNavigate();
  const location = useLocation();
  const [product ,setProduct] = useState({})
  useEffect(() =>  {
    window.scrollTo(0,0)
   
    const randomNumber = Math.floor(Math.random() * (2800 - 1000 + 1)) + 1000;
    setOpenLoader(true);
    const timer = setTimeout(() => {
      setOpenLoader(false);
    }, randomNumber); 
  
    
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
    </div>
  );
};









