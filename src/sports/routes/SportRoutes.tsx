import { Routes, Route, Navigate, Link } from 'react-router-dom'

import { SportList } from '../components/SportList';
import { UserSports } from '../components/UserSportList';


export const SportRoutes = () => {

    return (
        <>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/historical">historical</Link>
                    </li>
                    <li>
                        <Link to="">log out</Link>
                    </li>
                </ul>
            </nav>


            <Routes>
                <Route path="/" element={<SportList />} />
                <Route path="/historical" element={<UserSports />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

