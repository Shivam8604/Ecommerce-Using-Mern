import React from 'react'
import Header from './components/headers/Header'
import Page from './components/mainpages/Page'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Page />
      </div>
    </BrowserRouter>
  )
}

export default App
