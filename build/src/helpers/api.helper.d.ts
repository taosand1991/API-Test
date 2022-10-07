import { AxiosResponse } from 'axios';
declare class ApiHelper {
    getUsers: (endpoint: string) => Promise<AxiosResponse>;
    getUser: (endpoint: string, id: number) => Promise<AxiosResponse>;
    createUser: (endpoint: string, data: {
        name: string;
        job: string;
    }) => Promise<AxiosResponse>;
    updateUser: (endpoint: string, data: {
        name: string;
        job: string;
    }, id: number) => Promise<AxiosResponse>;
    deleteUser: (endpoint: string, id: number) => Promise<AxiosResponse>;
    userNotFound: (endpoint: string, id: number) => Promise<AxiosResponse>;
    getResources: (endpoint: string) => Promise<AxiosResponse>;
    getResource: (endpoint: string, id: number) => Promise<AxiosResponse>;
    resourceNotFound: (endpoint: string, id: number) => Promise<AxiosResponse>;
    register: (endpoint: string, data: {
        email: string;
        password?: string;
    }) => Promise<AxiosResponse>;
    login: (endpoint: string, data: {
        email: string;
        password?: string;
    }) => Promise<AxiosResponse>;
    delayResponse: (endpoint: string) => Promise<AxiosResponse>;
}
declare const _default: ApiHelper;
export default _default;
//# sourceMappingURL=api.helper.d.ts.map