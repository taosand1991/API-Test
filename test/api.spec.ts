import { AxiosResponse } from 'axios';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {expect} from 'chai'
import apiHelper from '../src/helpers/api.helper';
import Data from '../src/utils/base'

describe('Get users resource of the API', () => {
    let response : AxiosResponse
    before(async () => {
        response = await apiHelper.getUsers('users');
    })
    it('verify the response status of the get users resource',  () => {
        expect(response.status, 'expect response to be 200').to.eql(200);
    });

    it('verify the data length of the get users resource',  () => {
        expect(response.data.per_page).to.eql(6);
        expect(response.data.data.length).to.lessThanOrEqual(6);
    });

    it('verify the object property of the data', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        for(let i=0; i < response.data.data.length - 1; i++){
            expect(Object.getOwnPropertyNames(response.data.data[i])).to.include(Data.dataProperty[i])
        }
        
    })

    it('verify the page of the data to be 1', () => {
        expect(response.data.page, 'expect page to be 1').to.eql(1);
    })

    it('verify the page of the data to be 2', async () => {
        response = await apiHelper.getUsers('users?page=2');
        expect(response.data.page, 'expect page to be 2').to.eql(2);
    })
});

describe('GET user resource of the API', () => {
    let response : AxiosResponse
    before(async () => {
        response = await apiHelper.getUser('user', 1)
    })
    it('verify the status of the request', () => {
        expect(response.status).to.eql(200);
    });

    it('verify the id number of the user ', () => {
        expect(response.data.data.id).to.eql(1);
    });

    it('verify the object property of the data', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        for(let i=0; i < response.data.data.length - 1; i++){
            expect(Object.getOwnPropertyNames(response.data.data[i])).to.include(Data.dataProperty[i])
        }
        
    });

    it('verify user is not found', async() => {
        response = await apiHelper.userNotFound('user', 45);
        expect(response.status).to.eql(404);
        expect(response.statusText).to.eql("Not Found");
    })
})
