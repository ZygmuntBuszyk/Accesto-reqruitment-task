// import axios, { AxiosResponse } from "axios";
// import { HttpStatusCode } from "../../../types/HttpStatusCode";
// import {
//     AuthenticationError,
//     DataFetchingError,
//     InvalidParametersError,
// } from "./errors";
//
// export async function handleApiRequests<T>(
//     request: Promise<AxiosResponse>
// ): Promise<T> {
//     try {
//         const { data } = await request;
//         return data;
//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             switch (error.response?.status) {
//                 case HttpStatusCode.UNAUTHORIZED:
//                     throw new AuthenticationError(error.response.data);
//                 case HttpStatusCode.BAD_REQUEST:
//                     throw new InvalidParametersError(error.response.data);
//                 default:
//                     throw new DataFetchingError(error.message);
//             }
//         }
//
//         throw new DataFetchingError(
//             error.message || "Unable to fetch from Kiwigrid API"
//         );
//     }
// }


import api from './api';
import {AxiosResponse} from "axios";

const successCodes = [200, 201, 204];
// endpoint: string, method: string, queryOrBody?: object | FormData, sendHeaders: boolean = true
// request: Promise<AxiosResponse>
// handleApiRequests
export async function sendRequest<T>(endpoint: string): Promise<T> {
    try {
        const response: AxiosResponse = await api.get(endpoint);
        if (successCodes.includes(response.status)) {
            return await Promise.resolve(response?.data);
        } else {
            throw response;
        }
    }
    catch(err) {
        return await Promise.reject(err);
    }
    //     const {url} = await AuthService.getCacheServerUrl();
    //
    //     let headers;
    //     if (sendHeaders) {
    //         const authorization = `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}`;
    //         headers = new Headers({Authorization: au    thorization});
    //     }
    //     const fullUrl = url + endpoint + queryString;
    //
    //     let response = await fetch(fullUrl, {
    //         method: method,
    //         headers: headers,
    //         body: formattedBody,
    //     });
    //     const responseJson = await response.json();
    //
    //     if (!response.ok) {
    //         console.log('Error in: ' + fullUrl);
    //         console.log('Error response: ' + JSON.stringify(response));
    //         console.log('Error JSON response: ', responseJson);
    //         switch (response.status) {
    //             case 403:
    //                 SnackbarService.openError(__('MODAL.SNACKBAR_FORBIDDEN_ERROR'));
    //                 break;
    //             case 500:
    //                 SnackbarService.openError(__('MODAL.SNACKBAR_INTERNAL_SERVER_ERROR'));
    //                 break;
    //             //according to API 401 and 409 response has only /users POST request
    //             //and we will treat error in the component instead of main service
    //             case 401:
    //                 break;
    //             case 409:
    //                 break;
    //             default:
    //                 SnackbarService.openError(responseJson.error?.message);
    //                 break;
    //         }
    //         return await Promise.reject(responseJson);
    //     }
    //
    //     return await Promise.resolve(responseJson);
    // } catch (err) {
    //     return await Promise.reject(err);
    // }
}