import styled from "styled-components";
import {BsCircleFill} from 'react-icons/bs'


export const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  z-index: 1;
  background-color: transparent;

  .circle{
    align-items: center;
    gap:20px;
    width: 200px;
    display: flex;
    border-radius: 20px;
    background-color: rgba(255,255,255, 0.2);
  }

  button{
    z-index: 1;
    align-items: flex-end;
    justify-content: end;
    width: auto;
    height: auto;
    background-color: transparent;
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-family: 'Poppins';
    text-transform: uppercase;
    color: var(--white);
  }
`

export const IconCircle = styled(BsCircleFill)`
width: 35px;
height: 35px;
color:  white;
`