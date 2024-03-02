import React, { useState } from 'react'

const ColorChange = () => {

    const[rating,setRating]=useState(0)
    const handleChange=(index)=>{
        setRating(index+1)
    }
  return (
    <div>
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    style={{ color: index < rating ? 'red' : 'black', cursor: 'pointer' }}
                    onClick={() => handleChange(index)}
                >
                
                    &#9733;
                </span>
            ))}
        </div>
  )
}

export default ColorChange