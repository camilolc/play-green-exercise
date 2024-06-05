import { Navigate, Route, Routes } from 'react-router-dom';
import { SportRoutes } from '../sports/routes/SportRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';



export const AppRouter = () => {

    const {status} = useSelector((status:RootState)=> status.auth)
    
  return (
    <Routes>
        
        {
          (status === 'authenticated')
           ? <Route path="/*" element={ <SportRoutes /> } />
           : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' />  } />      

    </Routes>
  )
}