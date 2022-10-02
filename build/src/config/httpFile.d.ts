import { AxiosResponse } from 'axios';
export declare class HttpClient {
    static get(endpoint: string, id?: number): Promise<AxiosResponse>;
    static post(endpoint: string, requestBody: any): Promise<AxiosResponse | any>;
    static delete(endpoint: string, id: number): Promise<AxiosResponse | any>;
    static put(endpoint: string, data: any, id: number): Promise<AxiosResponse | any>;
    static patch(endpoint: string, data: any, id: number): Promise<AxiosResponse | any>;
}
export declare enum HttpMethods {
    POST = "post",
    GET = "get",
    PUT = "put",
    DELETE = "delete",
    PATCH = "patch"
}
//# sourceMappingURL=httpFile.d.ts.map