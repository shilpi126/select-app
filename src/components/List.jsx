import React from 'react'

function List({isActive,setIsActive,selected,setSelected}) {
    const options = ["Select", "Constrain","Argument", "And","Or"]

    return (
    <div>
        
            {isActive && 
            <ul className='list-cont'>
            {
            options.map((option)=> (
                <li className='list' onClick={(e)=>{
                    setSelected(option)
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

export default List