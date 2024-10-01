import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './pages/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />}/>
        </Routes>
    </BrowserRouter>
)