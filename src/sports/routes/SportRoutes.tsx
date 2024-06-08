import { Routes, Route, Navigate } from 'react-router-dom'

import { SportList } from '../components/SportList';
import { UserSports } from '../components/UserSportList';
import { Footer } from '../components/Footer';


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

