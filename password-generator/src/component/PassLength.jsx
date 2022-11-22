import React from 'react'
function PassLength(props) {

  return (
    <>
      <div className='d-flex justify-content-between'>
      <label htmlFor="password-length" className="form-label text-light">Character Length</label>
      <h5 className='text-light'>{props.passLength}</h5>
      </div>
      <input type="range" className="form-range" min="0" defaultValue={props.passLength} max="15" id="password-length" onChange={props.onChange}></input>
    </>
  )
}

export default PassLength
