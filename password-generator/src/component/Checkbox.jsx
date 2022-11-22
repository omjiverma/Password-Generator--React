import React from 'react'

function Checkbox(props) {
  return (
    <div className='my-2'>
       <input type="checkbox" id={props.name} name={props.name} defaultChecked = {props.isChecked} onChange ={props.onChange}></input>
       <label htmlFor={props.label} className='text-light ps-3'>{props.label}</label><br></br>
    </div>
  )
}

export default Checkbox
