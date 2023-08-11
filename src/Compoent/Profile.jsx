import React from 'react'
import styled from "styled-components"
import image from "../asset/download-removebg-preview (4).png"
import { cardStyles } from './Reusablestyle'
import { HiOutlineLocationMarker } from 'react-icons/hi'
export default function Profile() {
  return (
   <Section>
    <div className="image">
      <img src={image} alt="" />
    </div>
    <div className="title">
      <h2>Sunny </h2>
      <h5><HiOutlineLocationMarker/>Faridabad,Haryana </h5>
    </div>
    <div className="info">
      <div className="container">
        <h4>Days At Work</h4>
        <h3>56</h3>
      </div>
      <div className="container">
        <h4>Rides</h4>
        <h3> 435</h3>
      </div>
      <div className="container">
        <h4>Hours</h4>
        <h3>1344</h3>
      </div>
      </div>
   </Section>
  )
}
const Section  = styled.section`
${cardStyles}
margin-top: 1rem;
display: flex;
flex-direction: column;
align-items: center;
.title{
  text-align: center;
  h2,h5{
    color: orange;
   
    font-family: "Permanent Marker", cursive;
    letter-spacing: 0.3rem;
  }h5{
    letter-spacing: 0.2rem;
  }
}
.info{
  display: flex;
  gap:1rem;
  margin-top: 10px;
  .container{
    text-align: center ;
  }
}
 `;
