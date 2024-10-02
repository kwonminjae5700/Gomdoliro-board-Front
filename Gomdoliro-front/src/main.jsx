import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import WritePage from './pages/WritePage'
import ReadPage from './pages/ReadPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/write" element={<WritePage />}/>
            <Route path="/read/:id" element={<ReadPage />}/>
        </Routes>
    </BrowserRouter>
)