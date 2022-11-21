import React from 'react'

function CopyPassBtn() {
  const copyHandler = () =>{
    var copyPassword = document.getElementById("password")
    copyPassword.select()
    navigator.clipboard.writeText(copyPassword.value);
  };
  return (
    <>
      <div className="input-group mb-3">
        <input value="P455W0RD" type="text" id="password" className="form-control" aria-label="password" aria-describedby="copy-btn"></input>
        <button className="btn btn-outline-secondary" type="button" id="copy-btn" onClick={copyHandler}><i className="fa-regular fa-copy"></i></button>
    </div>
    </>
  )
}

export default CopyPassBtn
