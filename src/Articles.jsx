import { useState } from 'react'
import './index.css'
import Cards from './Cards'
function Articles() {
 

  return (
 <div className='flex flex-col items-center'>
    <div className='h-fit flex flex-wrap p-[2%] justify-center'>
      <Cards Heading="Mannat Social Welfare Society" Image="/Mannat Social Welfare Society.png" Description="Proud to support Mannat Welfare in its mission to aid older persons, empower women, and promote child education, contributing to a more inclusive and empowered society." type="1" />
      <Cards Heading="Voted For the Election 2025 !" Image="/Voted For the Election 2025 !.png" Description="I have cast my vote in the MP elections, fulfilling my duty as a responsible citizen. Every vote counts—let’s shape our future together!" type="2"/>
      <Cards Heading="Mega Credit Camp" Image="/MegaCreditCamp.png" Description="I was involved in a drive focused on boosting priority sector lending in Madhya Pradesh. This included organizing credit camps to facilitate rural housing loans and financial access for local families. The initiative helped expand banking services and promote inclusion, benefiting communities across several districts." type="3"/>
    </div>
    <button className='bg-[#351C15]  font-serif font-light text-[18px] p-[10px] text-white w-[150px] h-[50px]'>Show More</button>
    </div>
    
  )
}

export default Articles
