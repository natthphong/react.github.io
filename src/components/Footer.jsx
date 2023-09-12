import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
word-wrap: break-word;
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  text-decoration: none;

`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>TAR.</Logo>
        <Desc>
          ดหกดหดหกดหกดหกดหดหดกหดกหดหดาสทหาสดทหกาสทดาสหกทดาสหกทดาสกหทดสทหสดกหดหดหาสดาทหสดาทกาสหทดสวหทวดสหมกสวดมหวดวหมกดวหมวดมหวกดวสหมวดมหวมดวหมกดวสหมวดมหวมดวหมวดมหว
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
          <a  style={{ textDecoration: 'none', color: 'white' }} href="https://www.facebook.com/Tatazaza3a/"><Facebook /></a>
          
          </SocialIcon>
          <SocialIcon color="E4405F">
            <a  style={{ textDecoration: 'none', color: 'white' }} href="https://www.instagram.com/"><Instagram /></a>
          </SocialIcon>
          <SocialIcon color="55ACEE">
          <a  style={{ textDecoration: 'none', color: 'white' }} href="https://www.instagram.com/"><Twitter /></a>
          </SocialIcon>
          <SocialIcon color="E60023">
          <a  style={{ textDecoration: 'none', color: 'white' }} href="https://www.instagram.com/"><Pinterest /></a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 221 kamnanmean , bangkok 10150
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +66 94324 8965
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
