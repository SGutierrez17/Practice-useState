import React from 'react'

import '../styles/styles.css'

export default function Header() {
  const [isTextVisible, setIsTextVisible] = React.useState(false)

  const handleClick = () => {
    setIsTextVisible(() => !isTextVisible);
  }

  const isVisible = isTextVisible ? 'Hide' : 'Show'

  return (
    <div>
      <div className='header-button' >
        <button onClick={handleClick}>{isVisible}</button>
      </div>
      <div className='article-container'>
        {isTextVisible && <p>You Are Using UseState</p>}
      </div>
    </div>
  )
}
