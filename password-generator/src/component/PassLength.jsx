import React, {useState} from 'react'

function PassLength() {
  // password length state
  const [length, setLength]=useState(10)
  // Function htmlFor range
  const handleRange = () =>{
    var slider = document.getElementById("password-length");
    setLength(slider.value)
  }

  return (
    <>
      <div className='d-flex justify-content-between'>
      <label htmlFor="password-length" className="form-label text-light">Character Length</label>
      <h5 className='text-light'>{length}</h5>
      </div>
      <input type="range" className="form-range" min="0" value={length} max="15" id="password-length" onChange={handleRange}></input>
    </>
  )
}

export default PassLength
