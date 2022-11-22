import { useState } from "react";
import Checkbox from "./component/Checkbox";
import CopyPassBtn from "./component/CopyPassBtn";
import GenerateBtn from "./component/GenerateBtn";
import PassLength from "./component/PassLength";

const initialValues = {
  pass: "P455W0RD",
}

function App() {
  const [params, setParams]= useState(initialValues)

  // Copy Function
  const copyHandler = () =>{
    var copyPassword = document.getElementById("password")
    copyPassword.select()
    navigator.clipboard.writeText(copyPassword.value);
  };
  return (
    <div className="App">
      <div className="container d-flex  justify-content-center">
        <div className="col-lg-4 p-4 my-4 align-self-center" style={{background: "#505962"}}>
          <h1 className="h4 text-light text-center my-3">Password Generator</h1> 

          {/* Copy Button */}
          <CopyPassBtn value = {params.pass} onClick = {copyHandler}/>


          <div className="input-section">
            <PassLength />
            <Checkbox name="uppercase" label=" Include Uppercase Letter" />
            <Checkbox name="lowercase" label=" Include Lowercase Letter" />
            <Checkbox name="numbers" label=" Include Numbers" />
            <Checkbox name="symbols" label=" Include Symbols" />
          </div>



          <GenerateBtn/>
        </div>
      </div>
    </div>
  );
}

export default App;
