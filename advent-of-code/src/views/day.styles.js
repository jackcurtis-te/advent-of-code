import styled from "styled-components";
import { Link } from "react-router-dom";

export const Cover = styled.div`
  position: absolute;
  top: 0;
  left:0;

  width: 100vw;
  height: 100vh;
  background-color: black;
  @keyframes remove{
    from{
      width: 150%;
      height: 100%;
    }
    to{
      width: 0%;
      height: 0%;
    }
  }

  @keyframes fadein{
    from{opacity:1;}
    to{
      opacity:0;
      z-index: -2000;
    }
  }

  animation: fadein 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`

export const Container = styled.div`
  color: white;
  width: 50%;
  max-width: 700px;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  flex-wrap: wrap;
  background-color: #3A7A5E;
  padding: 50px;
  border-radius: 10px;
`

export const Back = styled(Link)`
  width: 100%;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
`

export const StyledP = styled.p`
  font-size: 15px;
`