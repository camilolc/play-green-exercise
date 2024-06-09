import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from './config';
import { UserProps } from '../interfaces/interfaces';


export const loginWithEmailPassword = async ({ email, password }: UserProps) => {

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid, photoURL, displayName, email
        }

    } catch (error: any) {
        return { ok: false, errorMessage: error.message }
    }
}

export const registerUserWithEmailPassword = async ({ email, password }: UserProps) => {

    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid } = resp.user;

        return {
            ok: true,
            uid, email
        }

    } catch (error: any) {
        console.log(error);
        return { ok: false, errorMessage: error.message }
    }

}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}