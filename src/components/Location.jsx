import React from 'react'

const Location = ({location}) => {

   
  return (
    <section > 


  <div className='flex items-center '>
  <h2 className='text-white mx-auto my-20 text-green-500 text-3xl font-bold tracking-widest'>{location?.name}</h2>
  </div>
  

<ul className='text-white flex justify-between px-8 bg-green-800 py-4 mb-20'>
    <li >  <span>type:</span>  <span >{location?.type} </span> </li>
    <li > <span> dimension:  </span > {location?.dimension} </li>
    <li > <span> population: </span >  {location?.residents.length} </li>
    
</ul>

    </section>
  )
}

export default Location