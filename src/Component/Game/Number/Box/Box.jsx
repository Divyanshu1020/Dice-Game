import React from 'react'
import "./Box.css"

export default function Box({value, setSelectNumber,selectNumber}) {
  return (
    <div 
        className={value== selectNumber ? "Sbox":"Box"} 
        onClick={()=> setSelectNumber(value) }
         >{value}
    </div>
  )
}
