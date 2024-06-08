import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

function App() {

  const data = [
    {name:"one love", image:"https://plus.unsplash.com/premium_photo-1691741856241-4c4c9a4c3b9d?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", artist:"atul", added:false},
    {name:"you and i", image:"https://images.unsplash.com/photo-1717620380098-9d3a0f5470ac?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", artist:"aman", added:false},
    {name:"sawariya", image:"https://plus.unsplash.com/premium_photo-1717529136960-ed6cc1c2dcfd?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", artist:"amit", added:false},
    {name:"tum sath ho", image:"https://images.unsplash.com/photo-1717677752061-6efe3d8ac919?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", artist:"rayum", added:false},
    {name:"challanger", image:"https://images.unsplash.com/photo-1717297808345-b740e9846158?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", artist:"shiv", added:false},
    {name:"distroyer", image:"https://images.unsplash.com/photo-1717501805972-6f44905bc53c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", artist:"subh", added:false},
    {name:"ding dong", image:"https://images.unsplash.com/photo-1717328831717-668877801956?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", artist:"hatodi", added:false},
  ]

   const [songData, setSongData]= useState(data)
   const handleClick = (index)=>{
            setSongData((prev)=>{
              return prev.map((item, itemIndex)=>{
                if(itemIndex === index) return {...item, added: !item.added};
                return item;
              })
            })
   }

  return (
    <div className='w-full h-screen bg-zinc-300'>
      <Navbar data={songData} />
      <div className='px-20 flex gap-10 flex-wrap'>
      {songData.map(((obj, index)=>(
        <Card  data={obj} index={index} handleClick={handleClick} key={index}/>
    )))}
      </div>
    </div>
  )
}

export default App
