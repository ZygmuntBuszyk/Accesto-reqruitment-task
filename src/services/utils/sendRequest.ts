import api from '../api/api';
import {AxiosResponse} from "axios";

const successCodes = [200, 201, 204];

export async function sendRequest<T>(endpoint: string): Promise<T> {
    try {
        const response: AxiosResponse = await api.get(endpoint, { responseType: 'arraybuffer'});

        if (successCodes.includes(response.status)) {
            return await Promise.resolve(response.data);
        } else {
            throw response;
        }
    }
    catch(err) {
        return await Promise.reject(err);
    }
}