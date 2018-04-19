import React from 'react'
import './App.scss'
import { hot } from 'react-hot-loader'
import logo from '../assets/images/logo.png'

const App = () => (
    <div>
      <img src={logo} />
      <h1>Packing React</h1>
    </div>
  )

  export default hot(module)(App)