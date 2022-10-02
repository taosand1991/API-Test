import { AxiosResponse } from 'axios';
declare class ApiHelper {
    getUsers: (endpoint: string) => Promise<AxiosResponse>;
    getUser: (endpoint: string, id: number) => Promise<AxiosResponse | unknown>;
    createUser: (endpoint: string, data: {
        name: string;
        job: string;
    }) => Promise<AxiosResponse | unknown>;
    updateUser: (endpoint: string, data: {
        name: string;
        job: string;
    }, id: number) => Promise<AxiosResponse | unknown>;
    deleteUser: (endpoint: string, id: number) => Promise<AxiosResponse | unknown>;
    userNotFound: (endpoint: string, id: number) => Promise<AxiosResponse | unknown>;
    getResources: (endpoint: string) => Promise<AxiosResponse | unknown>;
    getResource: (endpoint: string, id: number) => Promise<AxiosResponse | unknown>;
    resourceNotFound: (endpoint: string, id: number) => Promise<AxiosResponse | unknown>;
    register: (endpoint: string, data: {
        email: string;
        password: string;
    }) => Promise<AxiosResponse | unknown>;
    login: (endpoint: string, data: {
        email: string;
        password: string;
    }) => Promise<AxiosResponse | unknown>;
    delayResponse: (endpoint: string) => Promise<AxiosResponse | unknown>;
}
declare const _default: ApiHelper;
export default _default;
//# sourceMappingURL=api.helper.d.ts.map