import React from 'react'

function Constrain({isActive,setIsActive,data,setData}) {
    const options = ["True","False"]
  return (
    <div>
        
            {isActive && 
            <ul className='list-cont'>
            {
            options.map((option)=> (
                <li className='list' onClick={()=>{
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

export default Constrain