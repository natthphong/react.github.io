import styled from "styled-components";
import Product from "./Product";
import React from 'react'
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


export default function Products({props}) {
  console.log(props)
  const products = props 
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}


