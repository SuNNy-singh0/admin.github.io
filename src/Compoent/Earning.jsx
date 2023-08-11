import React from 'react'
import styled from'styled-components'
import { AreaChart,Area,Tooltip,ResponsiveContainer } from 'recharts'
import { cardStyles } from './Reusablestyle';
const data =[
  {data:3500},
  {data:4000},
  {data:4500},
  {data:5200},
  {data:3700},
  {data:4000},
  {data:5100},
  {data:4700},
  {data:6300},
  {data:7500},
  {data:7000},
  
]
export default function Earning() {
  return (
   <Section>
    <div className="top">
      <div className="info">
        <h4>This month earning</h4>
        <h1>$654.2</h1>
        <div className="growth">
          <span>+2.65%</span>
        </div>
      </div>
    </div>
    <div className="chart">
      <ResponsiveContainer height="100%" width="100%">
    <AreaChart 
    width={500} 
    height={400} 
    data={data}
    margin={{top:0,left:0,right:0,bottom:0}}>
      <Tooltip cursor={false}/>
      <Area
      animationBegin={800}
      animationDuration={2000}
      type="monotone"
      dataKey="data"
      stroke="#ffc107"
      fill="#8068233e"
      strokeWidth={4}
      />
    </AreaChart>

      </ResponsiveContainer>
    </div>
   </Section>
  )
}
const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 20rem;
margin-top: 1rem;
${cardStyles}
padding: 2rem 0 0  0;
.top{
  .info{
    display: flex;
flex-direction: column;
align-items: center;
gap:0.3rem;
h1{
  font-size: 2rem;
}
.growth{
  font-size: 1rem;
  color: orange;
}
  }
}
.chart{
  height: 70%;
}

`;
