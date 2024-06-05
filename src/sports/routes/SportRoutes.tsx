import { Routes, Route, Navigate } from 'react-router-dom'


export const SportRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <><h1>logged</h1> <button>lot out</button></> } />    
            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
      )
}

