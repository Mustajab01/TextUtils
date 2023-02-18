import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUPClick =()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLcClick =()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearClick =()=>{
        let newText = ""
        setText(newText)
    }

    const handleCapitalizeClick =()=>{
        const words = text.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }  
        setText(words.join(" "));
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
            <button className="btn btn-primary mx-2" onClick={handleUPClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLcClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCapitalizeClick}>Capitalize</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

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
