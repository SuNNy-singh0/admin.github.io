import React from 'react'
import styled from 'styled-components'
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { cardStyles } from './Reusablestyle';
export default function FAQ() {
  const faqs =[
   {icons:<AiFillCalendar/>,
    text:"how to manage time and get good marks for trips",
  },
  {icons:<MdTimelapse/>,
  text:"how to regulate transaction overtime",
},
{icons:<IoMdCash/>,
text:" how to money withdraw through points and tokens",
}
  ]
  return (
   <Section>
    <div className="title">
      <h2>imformation for driver</h2>
    </div>
    <div className="faqs">
      {faqs.map((faqs)=>{
       return(
        <div className="faq" >
          <div className="info">
            {faqs.icons}
            <h4>{faqs.text}</h4>
          </div>
          <IoIosArrowForward/>
        </div>
       )
      })}
    </div>
   </Section>
  )
}
const Section = styled.section`
${cardStyles}
.title{
  h2{
    color: orange;
    font-family: sans-serif;
    letter-spacing: 0.3rem;
  }
}
.faqs{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  .faq{
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  .info{
    display: flex;
    gap:1rem;
    align-items: center;
  }
  svg{
    font-size: 1.5rem;
  }
  &:nth-of-type(2){
    border-top: 0.01rem solid white;
    border-bottom: 0.01rem solid white;
    padding: 0.8rem 0;
  }
  }
}
`;

