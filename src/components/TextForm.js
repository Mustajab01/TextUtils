import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUPCLick =()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLcCLick =()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleOnChange =(event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState(" ");

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUPCLick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLcCLick}>Convert to Lowercase</button>

        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words, {text.length} charachters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>     
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
