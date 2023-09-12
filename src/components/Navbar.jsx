
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {  useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "70px" })}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
  ${mobile({ 
    padding: "5px",
    fontSize: "10px",
    color: "black"
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ 
    padding: "10px 0px",
    fontSize: "12px",
    color: "black"
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;



const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
cursor: pointer;
  font-weight: bold;
  ${mobile({ fontSize: "20px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
  const navigate = useNavigate();
  

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>TH</Language>
          <Logo style={{ display: 'flex', alignItems: 'center', marginLeft: '30px' }}>
          <Button onClick={(e) => navigate('/')}>Home</Button>
        </Logo>
        </Left>
        <Center>
        <div onClick={(e) => navigate('/')}>
        <Logo>NAME PROJECT</Logo></div>
         
        </Center>
        <Right>
          <MenuItem>
        
          <Button onClick={(e)=>navigate('/products')}>Product</Button>
          </MenuItem>
          <MenuItem>  <Button onClick={(e)=>  window.scrollTo(0, document.body.scrollHeight) }>Contact</Button>
          </MenuItem>
          <MenuItem>
          
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
