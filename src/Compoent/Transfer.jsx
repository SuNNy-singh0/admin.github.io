import React from 'react'
import styled from 'styled-components'
import { cardStyles } from './Reusablestyle'
import  { HiArrowNarrowRight} from "react-icons/hi"
import avatarImage from "../asset/chris.jpg"
import natasha from "../asset/download (1).jpeg"
import ironman from "../asset/download.jpeg"
export default function Transfer() {
  const transaction = [
    {
      image:avatarImage,
      name : "from Rahul ",
      time:"Today,16:36",
      amount:"+50$",
    },
    {
      image:natasha,
      name : "from Kriti",
      time:"Today,9:00",
      amount:"-25$",
    },
    {
      image:ironman,
      name : "from harkesh",
      time:"yesterday,20:34",
      amount:"+200$",
    },
  ]
  return (
  <Section>
    <div className="title">
      <h2>Your Transfers</h2>
    </div>
    <div className="transactions">
      {
        transaction.map((transaction)=>{
        return(
          <div className="transaction" >
            <div className="transactiontitle">
              <div className="transactionimage">
                <img src={transaction.image} alt="image" />
              </div>
              <div className="transactiondetail">
                <h3>
                  {transaction.name}
                </h3>
                <h3>
                  {transaction.time}
                </h3>
              </div>
              <div className="transactionamount">
                <span>{transaction.amount}</span>
              </div>
            </div>
          </div>
        )
        })
      }
    </div>
    <a href="#" className='view'>
      view all <HiArrowNarrowRight/>
    </a>
  </Section>
  )
}
const Section = styled.section`
${cardStyles}
display: flex;
flex-direction: column;
gap:1rem;
margin-top: 1rem;
.title{
 h2{
  color: orange;
    font-family: sans-serif;
    letter-spacing: 0.3rem;
 }
}
.transactions{
  display: flex;
flex-direction: column;
gap:1rem;
margin-top: 1rem;

  .transaction{
    display: flex;
justify-content: space-between;
align-items: center;
    .transactiontitle{
      display: flex;
      gap:1rem;
      .transactionimage{
        img{
          height: 4rem;
          border-radius: 3rem;
        }
      }
      
    }
    .transactionamount{
      color: red;
     
    }
  }
}
.view{
  width: 100%;
  color: orange;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.3rem;
  gap:0.5rem;
  svg{
    font-size: 1.4rem;
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px){
  
}
`

