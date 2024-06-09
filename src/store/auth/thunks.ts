import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword } from '../../firebase/provider';
import { UserProps } from '../../interfaces/interfaces';
import { checkingCredentials, login, logout, resetErrorMessage } from './authSlice';



export const checkingAuthentication = () => {
    return async( dispatch:any ) => {

        dispatch( checkingCredentials() );
        
    }
}


export const startLoginWithEmailPassword = ({ email, password }:any) => {
    return async( dispatch:any ) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ));

    }
}

export const startCreatingUserWithEmailPassword = ({ email, password }:UserProps) => {
    return async( dispatch:any ) => {

        dispatch( checkingCredentials() );

        const result = await registerUserWithEmailPassword({ email, password });
        if ( !result.ok ) return dispatch( logout( result ) );

        dispatch( login( result ))

    }

}

export const startLogout = () => {
    return async( dispatch:any ) => {
        
        await logoutFirebase();

        dispatch( logout() );

    }
}

export const startResetMessage = () => {
    return async( dispatch:any ) => {
        

        dispatch( resetErrorMessage() );

    }
}