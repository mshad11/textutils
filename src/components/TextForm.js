import React, { useState } from 'react'

function TextForm(props) {
 const[text, setText] = useState('');
 const handleUpClick = () =>{
    // setText("You Have clicked on upper click")
    let newText = text.toUpperCase();
    setText(newText)
}

const handleLowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
}

 const handleOnchange = (e) => {
   // console.log("On change")
    setText(e.target.value);
    
 }

 const handlClear = () =>{
    let newText = ""
    setText(newText)
 }
  return (
    <>
    <div>
     
<div className="mb-3">

  <textarea className="form-control" id="mybox" rows="8" value={text} onChange = { handleOnchange}></textarea>
</div>
<button className="btn btn-primary mx-4" onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-4" onClick={handleLowClick}>Convert To Lowercase</button>
<button className="btn btn-primary" onClick={handlClear}>Clear Text</button>
    </div>

<div className="container">
    <h3>Your Text Summary </h3>
    <h2><p> {text.split(" ").length} words and {text.length} characters</p></h2>
</div>
</>
  )
}

export default TextForm;
