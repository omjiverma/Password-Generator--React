import React from 'react'

function GenerateBtn(props) {
  return (
    <div className='my-3 d-grid'>
      <button type="button" className="btn btn-success" onClick={props.onClick}>
        Generate 
        <i className="fa-solid fa-arrow-right ps-2" ></i></button>
    </div>
  )
}

export default GenerateBtn
