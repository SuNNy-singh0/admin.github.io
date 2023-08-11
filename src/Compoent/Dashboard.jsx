import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Analytics from './Analytics'
import FAQ from './FAQ'
import Earning from './Earning'
import Transfer from './Transfer'
import Profile from './Profile'
export default function Dashboard() {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="rowone">
          <Analytics />
          <FAQ />
        </div>
        <div className="rowtwo">
          <Earning />
          <Transfer />
          <Profile />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
margin-left: 18vw;
padding: 2rem;
height: 100%;
.grid{
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 2rem;
  .rowone{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    height: 50%;
    gap: 1rem;
  }
  .rowtwo{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    height: 50%;
    gap: 1rem;
  }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px){
    margin-left: 0;
    .grid{
      .rowone,.rowtwo{
        grid-template-columns: 1fr;
      }
    }
  }
`
