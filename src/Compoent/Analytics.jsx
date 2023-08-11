import React from 'react'
import styled from 'styled-components'
import { cardStyles } from './Reusablestyle'
import { BsFillCalendar2WeekFill } from 'react-icons/bs'
import { IoStatsChart } from 'react-icons/io5'
import { BiGroup } from 'react-icons/bi'
import { FiActivity } from 'react-icons/fi'
export default function Analytics() {
  return (
    <Section>
     <div className="analytic">
      <div className="content">
        <h5>Spend this month</h5>
        <h2>$562</h2>
      </div>
      <div className="logo">
        <BsFillCalendar2WeekFill/>
      </div>
     </div>
     <div className="analytic">
      <div className="logo">
        <IoStatsChart></IoStatsChart>
      </div>
      <div className="content">
        <h5>Earning this month</h5>
        <h2>$856</h2>
      </div>
     </div>
     <div className="analytic">
      <div className="logo">
        <BiGroup/>
      </div>
      <div className="content">
        <h5>New Client</h5>
        <h2>$200</h2>
      </div>
     </div>
     <div className="analytic">
     <div className="content">
        <h5>Activity</h5>
        <h2>$700</h2>
      </div>
      <div className="logo">
       <FiActivity/>
      </div>
      
     </div>
    </Section>
  )
}
const Section = styled.section`
display: grid;
grid-template-columns: repeat(2,1fr);
gap: 1rem;
.analytic{
  ${cardStyles};
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  transition: 0.5 ease-in-out;
  &:hover{
    background-color: #f92c73f2;
    color: black;
    svg{
      color: white;
    }
  }
  .logo{
    background-color: black;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    svg{
      font-size: 1.5rem;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px){
  grid-template-columns: repeat(auto-fill,min-max(220px,1fr));
  .analytic{
    &:nth-of-type(3),&:nth-of-type(4){
      flex-direction: row-reverse;
    }
  }
}
`
  

