import { useState } from "react";
import Checkbox from "./component/Checkbox";
import CopyPassBtn from "./component/CopyPassBtn";
import GenerateBtn from "./component/GenerateBtn";
import PassLength from "./component/PassLength";
import {generate} from "generate-password"


function App() {
  const [pass, setPass] = useState('P455W0RD')
  // Copy Function
  const copyHandler = () =>{
    var copyPassword = document.getElementById("password")
    copyPassword.select()
    navigator.clipboard.writeText(copyPassword.value);
  };
  // Pass Length Slider Function
  const [passLength, setPassLength] = useState(10)
  const handleRange = () =>{
    var slider = document.getElementById("password-length");
    setPassLength(slider.value)
  }
  // handle Checkbox
  const [upper,setUpper] = useState(true)
  const [lower,setLower] = useState(true)
  const [numbers,setNumbers] = useState(true)
  const [symbols,setSymbols] = useState(true)
  const handleCheck = (e) => {
    if(e.target.name === "uppercase"){
      setUpper(current => !current)
      console.log(upper,"upper")
    }
    else if(e.target.name === "lowercase"){
      setLower(current => !current)
      console.log(lower,"Lower")
    }
    else if(e.target.name === "numbers"){
      setNumbers(current => !current)
      console.log(numbers,"Numbers")
    }
    else if(e.target.name === "symbols"){
      setSymbols(current => !current)
      console.log(symbols,"Symbols")
    }
  };
  // Password Generator Handler
  const generatePassword = () =>{
    var password = generate({
      length: passLength,
      uppercase: upper,
      lowercase: lower,
      numbers: numbers,
      symbols:symbols
    });
    setPass(password)
  }
  
  return (
    <div className="App">
      <div className="container d-flex  justify-content-center">
        <div className="col-lg-4 p-4 my-4 align-self-center" style={{background: "#505962"}}>
          <h1 className="h4 text-light text-center my-3">Password Generator</h1> 

          {/* Copy Button */}
          <CopyPassBtn value = {pass} onClick = {copyHandler}/>
          {/* Password input params */}
          <div className="input-section" onChange={handleRange} >
            {/* Pass Length Slider */}
            <PassLength passLength = {passLength} />
            {/* Checkboxes */}
            <Checkbox name="uppercase" label=" Include Uppercase Letter" isChecked={upper} onChange={handleCheck}/>
            <Checkbox name="lowercase" label=" Include Lowercase Letter" isChecked={lower} onChange={handleCheck}/>
            <Checkbox name="numbers" label=" Include Numbers" isChecked={numbers} onChange={handleCheck}/>
            <Checkbox name="symbols" label=" Include Symbols" isChecked={symbols} onChange={handleCheck}/>
          </div>

          <GenerateBtn onClick={generatePassword} />
        </div>
      </div>
    </div>
  );
}

export default App;
