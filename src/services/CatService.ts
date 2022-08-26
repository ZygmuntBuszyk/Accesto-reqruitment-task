import {sendRequest} from "./utils/sendRequest";
import {catApiRoutes} from "./api";

export interface IFilterQueryProps {
    searchValue?: string;
    color?: string;
}

export default class CatService {
    public static async getBufferCat({searchValue, color}: IFilterQueryProps): Promise<ArrayBuffer> {
        const query = `${searchValue}?color=${color}`;

        return sendRequest<ArrayBuffer>(`${catApiRoutes.says}${query}`);
    }
}