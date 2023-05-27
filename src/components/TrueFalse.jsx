import React, { useState } from 'react'
import {BsFillCaretDownFill} from "react-icons/bs"

function TrueFalse() {
    const options = ["True","False"]
    const [data, setData] = useState("True")
    const [isActive, setIsActive] = useState(false)
    const [selected, setSelected] = useState("Select")
  return (
    <div >
          <div >
        
        <div  style={{height:"38px",width:"100px", display:"flex", justifyContent:"space-between",fontSize:"20px",border:"1px solid gray"}}>
            <div style={{textAlign:"center"}}  onClick={()=>{
                setIsActive(true)
                
            }}>{data}
            
            </div>
            <div className='icon'>
                <BsFillCaretDownFill onClick={(e)=>setIsActive(!isActive)}/>
            </div>
            
         
        </div>


        </div>
        
    {isActive && 
    <ul  style={{height:"60px",marginTop:"-1px",width:"60px",listStyleType:"none",fontSize:"20px",border:"1px solid gray"}}>
    {
    options.map((option)=> (
        <li onClick={()=>{
            setData(option)
            setIsActive(false)
        }}
        >{option}</li>
    ))
    }
    </ul>
    }

</div>
  )
}

export default TrueFalse