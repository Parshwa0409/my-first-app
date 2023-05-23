import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter your text here !!!");
    // Now we are setting the value of 'textArea' {text} & this text is stateFull variable which can be changed using the function 'setText()' & this is connected using hooks . . .

    const [charCount, setCharCount] = useState(("Enter your text here !!!").length);
    const [wordCount, setWordCount] = useState(("Enter your text here !!!").split(" ").length);


    const handleOnChange = (event) => {
        // This function will allow to to listen to changes & access the value through the 'event' object we get when we change something in the 'textArea'.

        // accessing the text after the change made in 'textArea' & to reflect the changes on screen to user we are setting the value to newly acquired text.
        var onChangedText = event.target.value;
        var charLength = (onChangedText.length)
        var wordLength = charLength === 0 ? 0 : (onChangedText.split(" ").length)

        // Any state variable can be only changed / altered this way there is no other option like assignment.
        setText(onChangedText);
        setCharCount(charLength);
        setWordCount(wordLength);
    }

    const handleUpperClick = () => {
        var newText = text.toUpperCase();
        setText(newText);
    }

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-success" onClick={handleUpperClick}>Convert To UpperCase</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                {/* This can be done using the text.length directly */}
                <p>Total Words Used : {wordCount} & Total Characters Used : {charCount}</p>
            </div>
        </>
    )
}
