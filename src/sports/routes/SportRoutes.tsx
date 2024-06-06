import { Routes, Route, Navigate, Link } from 'react-router-dom'

import { SportList } from '../components/SportList';
import { UserSports } from '../components/UserSportList';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';


export const SportRoutes = () => {

    const distpatch:any = useDispatch();

    const onLogout =()=>{
        distpatch(startLogout())
    }

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
                        <Link to={""} onClick={onLogout}>log out</Link>
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

