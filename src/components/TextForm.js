import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upper case","success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lower case","success")
    }
    const handleClearClick = () => {
        let newText = " "
        setText(newText)
        props.showAlert("Screen Cleared","success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        let text = document.getElementById("myform");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied Text","success")
    }

  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myform" value={text} style={{backgroundColor: props.mode === 'dark'? 'grey': 'white', color: props.mode === 'dark'? 'white': 'black'}} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.btnType} mx-2 my-1`} onClick={handleUpClick}>Convert to uppercase</button>
        <button className={`btn btn-${props.btnType} mx-2 my-1`} onClick={handleLoClick}>Convert to lowercase</button>
        <button className={`btn btn-${props.btnType} mx-2 my-1`} onClick={handleClearClick}>Clear text</button>
        <button className={`btn btn-${props.btnType} mx-2 my-1`} onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white': 'black'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element!==0}).length} words and {text.length} characters </p>
        <p>{0.008* text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Please enter something in the textbox to get a preview"}</p>
    </div>
    </>
  )
}
