import React from 'react'

function Argument({isActive,setIsActive,argdata,setArgdata}) {
    const options = ["select", "My Arg", "X"]
  return (
    <div>
        
    {isActive && 
    <ul className='list-cont'>
    {
    options.map((option)=> (
        <li className='list' onClick={()=>{
            setArgdata(option)
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

export default Argument