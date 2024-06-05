import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import { RootState } from '../../store/store'
import { startLogout } from '../../store/auth/thunks';


export const SportRoutes = () => {

    const dispatch:any = useDispatch();

    const onLogOut =()=>{
        dispatch(startLogout());
    }
    return (
        <Routes>
            <Route path="/" element={ <><h1>logged</h1> <button onClick={onLogOut}>lot out</button></> } />    
            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
      )
}

