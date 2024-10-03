import {React, useState} from 'react'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import WritePage from './pages/WritePage'
import ReadPage from './pages/ReadPage'
import UpdatePage from './pages/UpdatePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/write" element={<WritePage />} />
                <Route path="/read/:id" element={<ReadPage />} />
                <Route path="/update/:id" element={<UpdatePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
