/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-prototype-builtins */
import { AxiosResponse } from 'axios';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {expect} from 'chai'
import { describe } from 'mocha';
import apiHelper from '../src/helpers/api.helper';
import Data from '../src/utils/base'

describe('Smoke API Testing of reqres', () => {
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
        it('verify the object property of the users data', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            for(let i=0; i < response.data.data.length - 1; i++){
                expect(Object.getOwnPropertyNames(response.data.data[i])).to.include(Data.dataUserProperty[i])
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
            response = await apiHelper.getUser('users', 1)
        })
        it('verify the status of the request', () => {
            expect(response.status).to.eql(200);
        });
        it('verify the id number of the user ', () => {
            expect(response.data.data.id).to.eql(1);
        });
        it('verify the object property of the user data', () => {
            const arrayLength = Object.keys(response.data.data as object);
            for(let i=0; i < arrayLength.length - 1; i++){
                expect(Object.getOwnPropertyNames(response.data.data)).to.include(Data.dataUserProperty[i])
            } 
        });
        it('verify user is not found', async() => {
            response = await apiHelper.userNotFound('user', 45);
            expect(response.status).to.eql(404);
            expect(response.statusText).to.eql('Not Found');
        });
    })

    describe('GET resources of the API', () => {
        let response: AxiosResponse
        before(async () => {
            response = await apiHelper.getResources('unknown');
        });
        it('verify the response status of the resourcse', () => {
            expect(response.status).to.eql(200);
        });
        it('verify the page of the resources', () => {
            expect(response.data.page).to.eql(1);
            expect(response.data.per_page).to.eql(6);
            expect(response.data.total).to.eql(12);
            expect(response.data.total_pages).to.eql(2);
        });
        it('verify the length of the resources api', () => {
            expect(response.data.data.length).to.be.lessThanOrEqual(6);
        });
        it('verify the response data property of the resources', () => {
            for(let i=0; i < response.data.data.length - 1; i++){
                expect(Object.getOwnPropertyNames(response.data.data[i])).to.include(Data.dataResourceProperty[i])
            }
        });
    })

    describe('GET resource API', () => {
        let response: AxiosResponse
        before(async () => {
            response = await apiHelper.getResource('unknown', 2);
        })
        it('verify the response status of the resource', () => {
            expect(response.status).to.eql(200);
        });
        it('verify the response data id of the resource', () => {
            expect(response.data.data.id).to.eql(2);
        })

        it('verify the response data property of the resource', () => {
            const arrayLength = Object.keys(response.data.data as object);
            for(let i=0; i < arrayLength.length - 1; i++){
                expect(Object.getOwnPropertyNames(response.data.data)).to.include(Data.dataResourceProperty[i])
            } 
        })
        it('verify the page not found on resouce', async() => {
            response = await apiHelper.getResource('unknown', 25);
            expect(response.status).to.eql(404);
        });
    });

    describe('create USER', () => {
        let response: AxiosResponse
        before(async () => {
            response = await apiHelper.createUser('users', {name: Data.dataProps[0].name, job: Data.dataProps[0].job});
        })
        it('verify user has been created', () => {
            expect(response.status).to.eql(201);
        });
        it('verify the body of the response user data', () => {
            const arrayLength = Object.keys(response.data as object);
            for(let i=0; i < arrayLength.length - 1; i++){
                expect(Object.getOwnPropertyNames(response.data)).to.include(Data.dataCreationProperty[i])
            } 
        });
        it(`verify the value of the 'name' and 'job' property`, () => {
            expect(response.data.name).to.eql(Data.dataProps[0].name);
            expect(response.data.job).to.eql(Data.dataProps[0].job);
        })

    })


    describe('Update USER', () => {
        let response: AxiosResponse
        before(async () => {
            response = await apiHelper.updateUser('users', {name: Data.dataProps[1].name, job: Data.dataProps[1].job}, 2);
        })
        it('verify that the account has been updated', () => {
            expect(response.status).to.eql(200);
            expect(response.data.name).to.eql(Data.dataProps[1].name);
            expect(response.data.job).to.eql(Data.dataProps[1].job);
            expect(response.data.hasOwnProperty('updatedAt')).to.be.true
        })
    })

    describe('Delete USER', () => {
        let response: AxiosResponse
        before(async () => {
            response = await apiHelper.deleteUser('users', 2)
        })
        it('verify that the user has been deleted', () => {
            expect(response.status).to.eql(204);
            expect(Boolean(response.data)).to.be.false
        })
    })

    describe('Login', () => {
        let response: AxiosResponse
        before(async () => {
            response = await apiHelper.login('login', {email: Data.dataProps[0].email, password: Data.dataProps[0].password});
        })
        it('verify account login', () => {
            expect(response.status).to.eql(200);
        });
        it('verify the body of the response', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, no-prototype-builtins
            expect(response.data.hasOwnProperty('token')).to.be.true
        });  
        it('verify that the account is not login', async () => {
            response = await apiHelper.login('login', {email: Data.dataProps[0].email});
            expect(response.status).to.eql(400);
            expect(response.status).to.eql(400)
        })
    })

    describe('Register', () => {
        let response: AxiosResponse
        before(async () => {
            response = await apiHelper.register('register', {email: Data.dataProps[0].email, password: Data.dataProps[0].password});
        })
        it('verify account has been created', () => {
            expect(response.status).to.eql(200);
        });
        it('verify the body of the response', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, no-prototype-builtins
            expect(response.data.hasOwnProperty('token')).to.be.true;
            expect(response.data.hasOwnProperty('id')).to.be.true;
            expect(response.data.id).to.eql(4)
        });
    
        it('verify that the account has not been created', async () => {
            response = await apiHelper.register('register', {email: Data.dataProps[0].email});
            expect(response.status).to.eql(400);
            expect(response.data).to.eql(Data.errorProps);
        })
    })

    describe('Delayed Response', () => {
        it('verify the timout for the response', async () => {
            const response = await apiHelper.getUsers('users?delay=3');
            setTimeout(() => {
                expect(response.status).to.eql(200)
            }, 5000)
        })
    })
})