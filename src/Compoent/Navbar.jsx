import React from 'react'
import styled from 'styled-components'
import {BiSearch} from "react-icons/bi"
export default function Navbar() {
  return (
  <Nav>
   <div className="title">
    <h4>Hi Sunny</h4>
    <h1>
        welcome to <span>My Taxi Dashboard</span>
    </h1>
   </div>
   <div className="search">
    <BiSearch/>
    <input type="text" placeholder='search' />
   </div>
  </Nav>
  );
}

const Nav = styled.nav`
 display:flex;
 justify-content: space-between;
 color: orange;
 .title{
 h1{
   font-size: 1.3rem;
    span{
      margin-left: 0.5rem;
      color: white;
      letter-spacing: 0.2rem;
    }
    
 }

}
.search{
    background-color: #3d3a3a;
    display: flex;
    align-items: center;
    gap :1rem;
    padding :1rem 8rem 1rem 1rem;
    margin-top: -10px
    svg{
        color: orange;
        font-size: 1.5rem;
    }
    input{
        background-color: transparent;
        border: none;
        font-family: sans-serif;
        color: orange;
        &::placeholder{
            color: orange;
            letter-spacing: 0.3rem;
        }
       &:focus{
        outline: none;
       }
    }
 }
 @media screen and (min-width: 280px) and (max-width: 1080px){
  flex-direction: column;
  .title{
    h1{
      span{
        display: block;
        margin: 1rem 0;
      }
    }
  }
 }
`