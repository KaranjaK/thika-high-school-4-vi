import React from 'react'
import Routes from './Routes'

const App = () => {
  return (
    <>
      {/* Accessible skip link: hidden visually but revealed on keyboard focus */}
      <a href="#main" className="skip-link">Skip to main content</a>

      <style>{` .skip-link{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}
        .skip-link:focus{left:1rem;top:1rem;width:auto;height:auto;overflow:visible;padding:.5rem 1rem;border-radius:.375rem;background:rgba(30,58,138,1);color:#fff;z-index:60}
      `}</style>

      <Routes />
    </>
  )
}

export default App
