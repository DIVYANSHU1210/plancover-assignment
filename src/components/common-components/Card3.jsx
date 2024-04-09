import React from 'react'
import CustomButton from './CustomButton'

function Card3({type, price, features, clickFunc}) {
  return (
    <div className='card-3'>
        <h3>{type}</h3>
        <h2>{price}</h2>
        <h4>LIMITED ACCESS</h4>
        <ul>
            {features.map(element => 
                 <li>{element}</li>
            )}
        </ul>
        <CustomButton text={"Chose Plane"} clickFunc={clickFunc}/>
    </div>
  )
}

export default Card3