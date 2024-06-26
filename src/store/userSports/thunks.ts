
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';


import { addNewSport, savingNewSport, setSaving, setSports, updateSport } from './userSportsSlice';
import { loadCards } from '../../helpers/loadCards';
import { SportUser } from '../../interfaces/interfaces';

export const startNewSport = (body:SportUser) => {
    return async( dispatch:any, getState:any ) => {

        dispatch( savingNewSport() );

        const { uid } = getState().auth;

        let newSport = body

        const newDoc = doc( collection( FirebaseDB, `${ uid }/card/cards`) );
        newSport.id = newDoc.id;          
        await setDoc( newDoc, newSport );

        //! dispatch
        dispatch( addNewSport( newSport ) );

    }
}

export const startLoadingUserSports = () => {
    return async( dispatch:any, getState:any ) => {
        
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('The UID does not exist');

        const notes = await loadCards( uid );
        dispatch( setSports( notes ) );
    }
}

export const startUpdateSport = (sport:SportUser) => {
    return async( dispatch:any, getState:any ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const sportToUpdate = sport      
            
        const docRef = doc( FirebaseDB, `${ uid }/card/cards/${ sport.id }` );
        await setDoc( docRef, sportToUpdate, { merge: true });

        dispatch( updateSport( sportToUpdate ) );

    }
}