import { Navigate, Route, Routes } from 'react-router-dom';
import { SportRoutes } from '../sports/routes/SportRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useCheckAuth } from '../hooks/useCheckAuth';



export const AppRouter = () => {

  const status = useCheckAuth();

  if ( status === 'checking' ) {
    return <h1>Loading</h1>
  }

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