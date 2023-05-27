import React, { useState } from 'react'
import Dropdown from './Dropdown'

function And() {
    const [adddata , setAdddata] =useState(false)
    const [data, setData] = useState([])

 

    
    const handleClick=()=>{
      setAdddata(true)
      const totalData = [...data,[]]
      setData(totalData)
    }

  return (
  <div >
     <Dropdown/>
     <Dropdown/>

    <div>
      {data.map((val,i)=>(
        <Dropdown/>
      ))}
    </div>
     <button  style={{height:"30px",width:"100px",margin:"10px"}} onClick={handleClick}>add on</button>
  </div>
  )
}

export default And