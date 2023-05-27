import React, { useState } from 'react'
import TrueFalse from './TrueFalse';

function NewArg() {
    const [value, setValue] = useState(" ");
    const [active, setActive] = useState(false)
    const [data, setData] = useState([])

    const handleAdd = ()=>{
        const totalData = [...data,[]]
        setData(totalData)
    }

return (
    <div >
        
        <div >
            {data?.map((val,i)=>(
            <div style={{display:"flex",margin:"10px"}}>
            <input type='text' placeholder='new arg' />
            <TrueFalse/>
            </div>
        ))
            }
            

        </div>

        <button style={{height:"30px",width:"100px",margin:"10px"}} onClick={()=>handleAdd()}>Add arg</button>
    </div>
  )
}

export default NewArg