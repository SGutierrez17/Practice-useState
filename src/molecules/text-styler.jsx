import React from 'react'

const FACTOR = 10;

export default function TextStyler() {
    const [inputField, setInputField] = React.useState('');

    const [textSize, setTextSize] = React.useState(20);

    const handleInputChange = (e) => {
        const {value} = e.target;
        setInputField(value);
    }

    const handleDecrease = () => {
        setTextSize(textSize - FACTOR);
    }

    const handleIncrease = () => {
        setTextSize(textSize + FACTOR);
    }

    return (
        <div>
            <div>
                <input type="text" name="field-input" value={inputField} id="field-input" onChange={handleInputChange} placeholder="Enter Text..."/>
            </div>
            <div>
                <button onClick={handleDecrease} type="submit" >Decrement</button>
                <button onClick={handleIncrease} type="submit" >Increment</button>
            </div>
            <p style={{fontSize: `${textSize}px`}}>{inputField}</p>
        </div>
    )
}