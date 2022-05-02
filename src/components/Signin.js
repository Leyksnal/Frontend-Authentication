import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Signin() {
  return (
    <Container>
      <Wrapper>
        <Gr>Sign in!</Gr>
        <Put>
          <input type="text" placeholder='email' />
          <input type="text" placeholder='password'/>
        </Put>
        <Button>Log in</Button>
        <Info>If you don't have an existing account please <A to={'/register'}>Sing up</A> </Info>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: #efc082;
  border-radius: 20px;
`;
const Put = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input{
    margin: 10px;
    padding: 10px;
    width: 300px;
    height: 20px;
    border-radius: 20px;
    outline: none;
    border: none;
    font-size: 0.9rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
const Gr = styled.h2`

`;
const Info = styled.p`
  width: 300px;
  text-align: center;
`;
const A = styled(Link)`
    font-weight: 700;
    cursor: pointer;
    color: #8d4d2d;
    text-decoration: none;
`;


const Button = styled.button`
  width: 120px;
  height:35px;
  margin: 10px;
  border-radius: 20px;
  outline: none;
  border: 2px solid #fff;
  font-size: 1.1rem;
  background-color: transparent;
  transform: scale(1);
  transition: all 400ms;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;


  :hover{
    cursor: pointer;
    transform: scale(0.9)
  }
`;