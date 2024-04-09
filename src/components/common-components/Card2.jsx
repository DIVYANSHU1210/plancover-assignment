import React from 'react'

function Card2({icon, heading, text}) {
  return (
    <div className='card-2'>
        <h1>{icon}</h1>
        <h3>{heading}</h3>
        <p>{text}</p>
    </div>
  )
}

export default Card2