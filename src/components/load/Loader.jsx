import styled from "styled-components";
import React from 'react'
import { CircularProgress } from "@material-ui/core";

export const Container = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(255, 255, 255, 0.5);
z-index: 5;
  & .MuiCircularProgress-root {
    color: grey;
  }
`;


export default function Loader() {
    return (
        <Container>
          <CircularProgress />
        </Container>
      );
    
}
