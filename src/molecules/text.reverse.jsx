import React from 'react'

export default function TextReverse() {
    const [inputField, setInputField] = React.useState('');

    const [textReverse, setTextReverse] = React.useState('');

    const handleInputChange = (e) => {
        const {value} = e.target;

        setInputField(value);
        setTextReverse(value.split('').reverse('').join(''));
    }

    const handleOnClick = (e) => {
        e.preventDefault();

        setInputField('');
        setTextReverse('');
    };

    return (
        <form onSubmit={handleOnClick}>
            <div>
                <div>
                    <input type="text" name="field-input" value={inputField} id="field-input" onChange={handleInputChange} placeholder="Enter Text..."/>
                </div>
                <div>
                    <button className="field btn" onClick={handleOnClick} type="submit" >Clear</button>
                </div>
            </div>
            <div>
                <p>Reversed Text: {textReverse}</p>
            </div>
        </form>
    )
}