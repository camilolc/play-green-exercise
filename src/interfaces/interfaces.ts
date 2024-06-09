export interface AuthUser {
    status: string
    uid: null | string,
    email: null | string,
    errorMessage: null | string,
}

export interface Sport {
    idSport: string;
    strSport: string;
    strFormat: string;
    strSportThumb: string;
    strSportThumbBW: string;
    strSportIconGreen: string;
    strSportDescription: string;
}

export interface SportUser {
    id: string
    title: string
    urlImg: string
    idSport: string
    status: boolean
}

export interface UserProps {
    email: string;
    password: string
}
