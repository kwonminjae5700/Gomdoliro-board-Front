import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />}/>
        </Routes>
    </BrowserRouter>
)