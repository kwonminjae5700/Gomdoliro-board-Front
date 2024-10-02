import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import WritePage from './pages/WritePage'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/write" element={<WritePage />}/>
        </Routes>
    </BrowserRouter>
)