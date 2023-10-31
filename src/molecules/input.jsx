import React from 'react'

import '../styles/styles.css'

export default function Input({onClearClick}) {
  const [isInputClear, setIsInputClear] = React.useState('')

  const handleInputChange = (e) => {
    setIsInputClear(e.target.value);
  }

  const handleInputClear = (e) => {
    e.preventDefault();

    onClearClick(isInputClear);
    setIsInputClear('');
};  

  return (
    <form onSubmit={handleInputClear}>
      <div className='clear-input'>
        <input type="text" id="add-input" value={isInputClear} onChange={handleInputChange} placeholder="  Enter Task..."/>
      </div>
      <div className='clear-button' >
        <button onClick={handleInputClear}>Clear</button>
      </div>
    </form>
  )
}
