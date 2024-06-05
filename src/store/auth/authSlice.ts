import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthUser } from '../../interfaces/interfaces';

type OptionalPayloadAction<T> = PayloadAction<T | undefined>;

const initialState:AuthUser ={
    status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
    uid: null as string | null,
    email: null as string | null,
    errorMessage: null as string | null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: ( state, { payload } ) => {
            state.status = 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = payload.uid;
            state.email = payload.email;
            state.errorMessage = null;
        },
        logout: ( state, action: OptionalPayloadAction<{ errorMessage?: string }> ) => {
            state.status = 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = null;
            state.email = null;
            state.errorMessage = action.payload?.errorMessage ?? null;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;