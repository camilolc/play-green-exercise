import { Routes, Route, Navigate } from 'react-router-dom'

import { SportList } from '../pages/SportList';
import { UserSports } from '../pages/UserSportList';
import { Footer } from '../pages/Footer';


export const SportRoutes = () => {    

    return (
        <>
            <Routes>
                <Route path="/" element={<SportList />} />
                <Route path="/historical" element={<UserSports />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
           
            <Footer></Footer>
        </>
    )
}

