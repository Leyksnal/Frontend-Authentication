import React from 'react'
import styled from 'styled-components';
import {BsFillCameraFill} from 'react-icons/bs'
import { Link, } from 'react-router-dom';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'


export default function Signup() {
    const formSchama = yup.object().shape({
        username: yup.string().required(`This cannot be empty`),
        email: yup.string().email().required(`This cannot be empty`),
        password: yup.string().required(`This cannot be empty`),
        confirm: yup.string().oneOf([yup.ref("password"), null]).required(`This cannot be empty`)
    }),

    {
      register,
      reset,
      formState: {errors},
      handleSubmit
    } = useForm({
      resolver: yupResolver(formSchama)
    })

    const mySubmit = handleSubmit(async (data) =>{
      console.log(data)
      reset()
    })

  return (
    <Container>
      <Wrapper onSubmit={mySubmit}>
        <Gr>Create An Account</Gr>
        <Avatar></Avatar>
        <label htmlFor='pictureToUpload'>
          <BsFillCameraFill size={'1.3rem'}/>
          <input id="pictureToUpload" type="file"/>
        </label>
        <Put>
          <input type="text" placeholder='username' {...register("username")}/>
          <input type="text" placeholder='email' {...register("email")}/>
          <input type="text" placeholder='password' {...register("password")}/>
          <input type="text" placeholder='confirm password' {...register("confirm")}/>
        </Put>
        <Button type='submit'>sign up</Button>
        <Info>Already have an account <A to={'/login'}>Log in</A></Info>
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
const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: #efc082;
  border-radius: 20px;


  label{
    border: 3px solid #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-top: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    input{
      display: none;
    }

    :hover{
      cursor: pointer;
    }
  }
`;
const Put = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input{
    margin: 8px;
    padding: 10px;
    width: 300px;
    height: 18px;
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

const A = styled(Link)`
    font-weight: 700;
    cursor: pointer;
    color: #8d4d2d;
    text-decoration: none;
`;

const Avatar = styled.img`
    border: 3px solid #fff;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;