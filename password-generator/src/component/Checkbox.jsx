import React from 'react'

function Checkbox(props) {
  return (
    <div className='my-2'>
       <input type="checkbox" id={props.label} name={props.label} value="True"></input>
       <label htmlFor={props.label} className='text-light ps-3'>{props.label}</label><br></br>
    </div>
  )
}

export default Checkbox
