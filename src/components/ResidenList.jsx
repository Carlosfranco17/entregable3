import React, { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'

const ResidenList = ({location}) => {

const [currenList, setCurrenList] = useState(1)

const RESIDENT_PER_PAGE=20
const arrPage=[] 
 
const quantityPage =Math.ceil(location?.residents.length / RESIDENT_PER_PAGE)
   
for (let i = 1; i <= quantityPage; i++) {
arrPage.push(i)
}

const startCut=currenList * RESIDENT_PER_PAGE - RESIDENT_PER_PAGE

const endCut=currenList * RESIDENT_PER_PAGE 
   
    const residents=location?.residents 
  
  useEffect(()=>{


setCurrenList(1)
     
  },[])
  
    return (
    <article>
    <section className='p-4 grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-w-[1000px] mx-auto'> 
{


residents?.slice(startCut, endCut).map((resident)=>(
    <ResidentCard  key={resident} resident={resident} />


))}

 
    </section>
    <ul className='flex gap-4 justify-center py-4 text-white'>
       { arrPage.map(page=> <li onClick={()=>setCurrenList(page)} className={`cursor-pointer p-3 rounded-md ${page==currenList && "bg-green-800 text-white font-bold"}`} key={page}>{page}</li>)}
    </ul>
    </article>
  )
}
 
export default ResidenList