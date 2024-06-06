import { loginWithEmailPassword, logoutFirebase } from '../../firebase/provider';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = () => {
    return async( dispatch:any ) => {

        dispatch( checkingCredentials() );
        
    }
}


export const startLoginWithEmailPassword = ({ email, password }:any) => {
    return async( dispatch:any ) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ));

    }
}

export const startLogout = () => {
    return async( dispatch:any ) => {
        
        await logoutFirebase();

        dispatch( logout() );

    }
}