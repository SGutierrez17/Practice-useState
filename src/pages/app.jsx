import React from 'react';

import Input from '../molecules/input';

function App() {
  const inputClear = () => {
  }

  return (
    <div className="App">
    <Input onClearClick={inputClear}/>
    </div>
  )
  }

export default App;
