import React from 'react'

function CopyPassBtn( props) {
  return (
    <>
      <div className="input-group mb-3">
        <input value={props.value} type="text" id="password" className="form-control text-black" aria-label="password" aria-describedby="copy-btn" onChange={(event)=>event.target}></input>
        <button className="btn btn-outline-secondary" type="button" id="copy-btn" onClick={props.onClick}><i className="fa-regular fa-copy text-light"></i></button>
    </div>
    </>
  )
}

export default CopyPassBtn
