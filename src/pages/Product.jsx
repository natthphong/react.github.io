import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation, useNavigate } from "react-router";

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
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;





const Product = () => {
  const navigate = useNavigate()
  window.scrollTo(0, 0)
  const location = useLocation();
  const item = location.state;
  console.log('item' , item)
  
  if(item === undefined || item===null){
    navigate("/products")
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={item||"https://github.com/natthphong/images/blob/main/default/1.png?raw=true"} />
        </ImgContainer>
        <InfoContainer>
          <Title>{item || "title"}</Title>
          <Desc>
            {item.desc || "Desc"}
          </Desc>
          <Price>{item||"0"} บาท</Price>
          
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
