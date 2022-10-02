/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, {AxiosResponse, AxiosError} from 'axios';
import URL from '../utils/base';



export class HttpClient {
    static async get (endpoint: string, id?: number): Promise<AxiosResponse> {
        const baseUrl = id ? `${URL.apiBaseUrl}/${endpoint}/${id}` : `${URL.apiBaseUrl}/${endpoint}`
        try {
            const response: AxiosResponse = await axios({
                url: baseUrl,
                method: HttpMethods.GET,
            })

            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return response
        } catch (error) {
            if(error instanceof AxiosError ){
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                return error.response as AxiosResponse
            }
            return error as AxiosResponse
        }
        
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async post (endpoint: string, requestBody: any): Promise<AxiosResponse> {
        const baseUrl = `${URL.apiBaseUrl}/${endpoint}`
        try {
            const response: AxiosResponse = await axios({
                method: HttpMethods.POST,
                url: baseUrl,
                data: requestBody,
            });
            return response 
        } catch (error) {
            if(error instanceof AxiosError ){
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                return error.response as AxiosResponse
            }
            return error as AxiosResponse
        }
    }

    static async delete (endpoint: string, id: number): Promise<AxiosResponse> {
        const baseUrl = `${URL.apiBaseUrl}/${endpoint}/${id}`
        try {
            const response: AxiosResponse = await axios({
                url: baseUrl,
                method:HttpMethods.DELETE
            })
            return response
        } catch (error) {
            if(error instanceof AxiosError ){
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                return error.response as AxiosResponse
            }
            return error as AxiosResponse
        }
       
    }
    static async put (endpoint: string, data :  any, id: number): Promise<AxiosResponse> {
        const baseUrl = `${URL.apiBaseUrl}/${endpoint}/${id}`
        try {
            const response: AxiosResponse = await axios({
                url: baseUrl,
                method:HttpMethods.PUT,
                data: data
            })
            return response
        }catch (error) {
            if(error instanceof AxiosError ){
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                return error.response as AxiosResponse
            }
            return error as AxiosResponse
        }
        
    }

    static async patch (endpoint: string, data : any, id: number): Promise<AxiosResponse> {
        const baseUrl = `${URL.apiBaseUrl}/${endpoint}/${id}`
        try {
            const response: AxiosResponse = await axios({
                url: baseUrl,
                method:HttpMethods.PATCH,
                data: data
            })
            return response
        } catch (error) {
            if(error instanceof AxiosError ){
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                return error.response as AxiosResponse
            }
            return error as AxiosResponse
        }
        
    }
}


export enum HttpMethods {
    POST = 'post',
    GET = 'get',
    PUT = 'put',
    DELETE = 'delete',
    PATCH = 'patch'
}

