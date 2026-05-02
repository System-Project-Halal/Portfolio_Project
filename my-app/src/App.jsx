import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainWebsite from "./Components/view/MainWebsite"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainWebsite />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App