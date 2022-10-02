import { HttpClient } from './../config/httpFile';
import { AxiosResponse, AxiosError } from 'axios';



class ApiHelper {
    getUsers = async (endpoint: string) : Promise<AxiosResponse> => {
        return HttpClient.get(endpoint);
    }
 
    getUser = async (endpoint: string, id: number) : Promise<AxiosResponse> => {
        return HttpClient.get(endpoint, id);
    };
 
    createUser = async (endpoint: string,  data: {name: string, job: string}): Promise<AxiosResponse> => {
        return HttpClient.post(endpoint, data)
    };

    updateUser = async (endpoint: string, data: {name: string, job: string}, id: number,) : Promise<AxiosResponse> => {
        return HttpClient.put(endpoint, data, id)
    }
    
    deleteUser = async (endpoint: string, id: number): Promise<AxiosResponse> => {
        return HttpClient.delete(endpoint, id)
    };

    userNotFound = async (endpoint: string, id: number): Promise<AxiosResponse> => {
        return HttpClient.get(endpoint, id);
    }

    getResources =  async (endpoint: string) : Promise<AxiosResponse> => {
        return HttpClient.get(endpoint);
    }

    getResource = async (endpoint: string, id: number) : Promise<AxiosResponse> => {
        return HttpClient.get(endpoint, id);
    }
    resourceNotFound = async (endpoint: string, id: number) : Promise<AxiosResponse> => {
        return HttpClient.get(endpoint, id);
    }

    register =  async (endpoint: string, data: {email: string, password: string} ) : Promise<AxiosResponse> => {
        return HttpClient.post(endpoint, data);
    } 

    login =  async (endpoint: string, data: {email: string, password: string}) : Promise<AxiosResponse> => {
        return HttpClient.post(endpoint, data);
    }

    delayResponse = async (endpoint: string) : Promise<AxiosResponse> => {
        return HttpClient.get(endpoint)
    }
}


export default new ApiHelper()
