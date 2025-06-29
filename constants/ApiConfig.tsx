import axios from 'axios'

const ApiConfig = async (method, baseUrl) => {
    const options = {
        url: baseUrl,
        method: method.toUpperCase(),
    }
    try {
        const response = await axios(options);
        return response
    }
    catch (error) {
        console.error('Error in api: ', error);
    };
}
export default ApiConfig