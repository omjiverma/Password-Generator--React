import React from 'react'

function CopyPassBtn( props) {
  const copyHandler = () =>{
    var copyPassword = document.getElementById("password")
    copyPassword.select()
    navigator.clipboard.writeText(copyPassword.value);
  };
  return (
    <>
      <div className="input-group mb-3">
        <input value={props.value} type="text" id="password" className="form-control" aria-label="password" aria-describedby="copy-btn"></input>

        <button className="btn btn-outline-secondary" type="button" id="copy-btn" onClick={props.onClick}><i className="fa-regular fa-copy"></i></button>
    </div>
    </>
  )
}

export default CopyPassBtn
