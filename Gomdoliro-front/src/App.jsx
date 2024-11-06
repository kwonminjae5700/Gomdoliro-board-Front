import { React, useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import WritePage from './pages/WritePage'
import ReadPage from './pages/ReadPage'
import UpdatePage from './pages/UpdatePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import FindPWPage from './pages/FindPWPage'

const AppContent = () => {
    const [searchValue, setSearch] = useState('')
    const location = useLocation()
    const nav = useNavigate()

    const hideHeader = location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/findpw'

    useEffect(() => {
        if(localStorage.getItem('nickname') === null) nav('/')
    })

    return (
        <>
            {!hideHeader && (
                <Header 
                    search_Header={searchValue} 
                    setSearch_Header={setSearch} 
                />
            )}
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/main" element={<MainPage searchValue={searchValue} />} />
                <Route path="/write" element={<WritePage />} />
                <Route path="/read/:id" element={<ReadPage />} />
                <Route path="/update/:id" element={<UpdatePage />} />
                <Route path="/signup" element={<SignupPage />}/>
                <Route path="/findpw" element={<FindPWPage />}/>
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
