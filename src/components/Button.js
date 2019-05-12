import React from 'react'

//Button component
const Button = ({ onClick, title }) => {
   return (
      <button className='button' id='new-quote' onClick={onClick}>{title}</button>
   )
}

export default Button