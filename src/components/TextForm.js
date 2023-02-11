import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUPCLick =()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChange =(event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter Text Here");

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUPCLick}>Convert to Uppercase</button>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
        </div>
        </>
    )
}