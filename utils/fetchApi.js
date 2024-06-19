// To make HTTP requests
import axios from "axios";

// The base URL for the API endpoint
export const baseUrl = "https://buyut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            // Specifies the host for the API
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            // An API key for authentication
            'x-rapidapi-key': '9a74b8f953mshad72a580caf8c05p13e770jsna19c0e9ea465'
        }
    });

    return data;
} 
