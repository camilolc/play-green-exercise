import { signInWithEmailAndPassword} from 'firebase/auth';
import { FirebaseAuth } from './config';

interface Props{
    email:string;
    password:string
}

export const loginWithEmailPassword = async({ email, password }:Props) => {

    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid, photoURL, displayName,email
        }

    } catch (error:any) {
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}