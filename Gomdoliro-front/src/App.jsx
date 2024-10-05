import { React, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import WritePage from './pages/WritePage'
import ReadPage from './pages/ReadPage'
import UpdatePage from './pages/UpdatePage'
import LoginPage from './pages/LoginPage'

const AppContent = () => {
    const [searchValue, setSearch] = useState('')
    const location = useLocation()

    return (
        <>
            {location.pathname !== '/login' && (
                <Header search_Header={searchValue} setSearch_Header={setSearch} />
            )}
            <Routes>
                <Route path="/" element={<MainPage searchValue={searchValue} />} />
                <Route path="/write" element={<WritePage />} />
                <Route path="/read/:id" element={<ReadPage />} />
                <Route path="/update/:id" element={<UpdatePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    )
}

export default App
