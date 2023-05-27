import React, { useState } from 'react'
import {BsFillCaretDownFill} from "react-icons/bs"
import {RxCross2} from "react-icons/rx"
import List from './List'

import Constrain from './Constrain'
import Argument from './Argument'
import And from './And'


function Dropdown() {
    const [isActive, setIsActive] = useState(false)
    const [selected, setSelected] = useState("Select")
    const [data, setData] = useState("True")
    const [argdata, setArgdata] = useState("My Arg")

return (
    <div>
    {selected === "Constrain" ? (
        <div className='container'>
        <div className='cont'>
            <div className='sel' onClick={()=>{
                setIsActive(true)
                
            }}>{data}
            
            
            
            </div>
            <div className='icon'>
                <BsFillCaretDownFill onClick={(e)=>setIsActive(!isActive)}/>
            </div>
            
            <div className='icon' onClick={()=> 
            {
                setSelected("")
                setIsActive(true)
            }
            }
            ><RxCross2/></div>
        </div>
        {/* //<List selected={selected} setSelected={setSelected} isActive={isActive} setIsActive={setIsActive} /> */}
        {selected === "Constrain" ? <Constrain isActive={isActive} setIsActive={setIsActive} data={data} setData={setData}/>: ""}

    </div>

        )  : selected === "Argument"  ? 

       ( <div className='container'>
       <div className='cont'>
           <div className='sel' onClick={()=>{
               setIsActive(true)
               
           }}>{argdata}
           
           
           
           </div>
           <div className='icon'>
               <BsFillCaretDownFill onClick={(e)=>setIsActive(!isActive)}/>
           </div>
           
           <div className='icon' onClick={()=> 
           {
               setSelected("")
               setIsActive(true)
           }
           }
           ><RxCross2/></div>
       </div>

       <Argument isActive={isActive} setIsActive={setIsActive} argdata={argdata} setArgdata={setArgdata}/>

       </div>)

        : 
        selected === "And" ? ( <div className='container'>
        
        <div className='cont'>
            <div className='sel' onClick={()=>{
                setIsActive(true)
                
            }}>{selected}
            
            </div>
            <div className='icon'>
                <BsFillCaretDownFill onClick={(e)=>setIsActive(!isActive)}/>
            </div>
            
            <div className='icon' onClick={()=> 
            {
                setSelected("")
                setIsActive(true)
            }
            }
            ><RxCross2/></div>
        </div>

        <And />

        </div>) :(

        <div className='container'>
        
        <div className='cont'>
            <div className='sel' onClick={()=>{
                setIsActive(true)
                
            }}>{selected}
            
            </div>
            <div className='icon'>
                <BsFillCaretDownFill onClick={(e)=>setIsActive(!isActive)}/>
            </div>
            
            <div className='icon' onClick={()=> 
            {
                setSelected("")
                setIsActive(true)
            }
            }
            ><RxCross2/></div>
        </div>

        <List selected={selected} setSelected={setSelected} isActive={isActive} setIsActive={setIsActive} />

        </div>
        )
    }
    </div>


    

)
}

export default Dropdown