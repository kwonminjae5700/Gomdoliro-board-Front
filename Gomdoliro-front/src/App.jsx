import { React, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import WritePage from './pages/WritePage'
import ReadPage from './pages/ReadPage'
import UpdatePage from './pages/UpdatePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

const AppContent = () => {
    const [userLogin, setUserLogin] = useState('')
    const [searchValue, setSearch] = useState('')
    const location = useLocation()

    const hideHeader = location.pathname === '/' || location.pathname === '/signup'

    return (
        <>
            {!hideHeader && (
                <Header 
                    search_Header={searchValue} 
                    setSearch_Header={setSearch} 
                    userLogin={userLogin}
                />
            )}
            <Routes>
                <Route path="/" element={<LoginPage setUserLogin={setUserLogin}/>} />
                <Route path="/main" element={<MainPage searchValue={searchValue} />} />
                <Route path="/write" element={<WritePage userLogin={userLogin}/>} />
                <Route path="/read/:id" element={<ReadPage userLogin={userLogin}/>} />
                <Route path="/update/:id" element={<UpdatePage />} />
                <Route path="/signup" element={<SignupPage />}/>
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
