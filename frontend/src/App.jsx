import React from 'react'
import LeftHeader from './Components/LeftHeader'
import RightHeader from './Components/RightHeader'
import LeftBody from './Components/LeftBody'
import RightBody from './Components/RightBody'
import "./App.css" 

function App() {
  return (
    <div>
  
      <div id="header">
        <LeftHeader></LeftHeader>
        <RightHeader></RightHeader>
      </div>

      <div id="body">
      <LeftBody></LeftBody>
      <div class="middle-body"></div>
      <RightBody></RightBody>
      </div>
     
  </div>
  )
}

export default App