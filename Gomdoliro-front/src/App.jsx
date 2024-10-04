import {React, useState} from 'react'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import WritePage from './pages/WritePage'
import ReadPage from './pages/ReadPage'
import UpdatePage from './pages/UpdatePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    const [searchValue, setSearch] = useState('')

    return (
        <BrowserRouter>
            <Header search_Header={searchValue} setSearch_Header={setSearch}/>
            <Routes>
                <Route path="/" element={<MainPage searchValue={searchValue}/>} />
                <Route path="/write" element={<WritePage />} />
                <Route path="/read/:id" element={<ReadPage />} />
                <Route path="/update/:id" element={<UpdatePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
