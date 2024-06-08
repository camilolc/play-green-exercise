import axios from "axios";

export const getAllSportsApi = async () => {
    const url = 'https://dff6kz4nmb.execute-api.us-east-1.amazonaws.com/development/test-front';
    try {
        const response = await axios.get(url)
        const {data} = response;

        return data;

    } catch (error) {
        console.log(error)

    }
    return null;


}