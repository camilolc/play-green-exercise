import axios from "axios";

export const getAllSportsApi = async () => {
    const url = import.meta.env.VITE_GET_ALL_SPORTS;
    try {
        const response = await axios.get(url)
        const {data} = response;

        return data;

    } catch (error) {
        console.log(error)

    }
    return null;


}