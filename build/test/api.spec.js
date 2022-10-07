"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const chai_1 = require("chai");
const api_helper_1 = __importDefault(require("../src/helpers/api.helper"));
const base_1 = __importDefault(require("../src/utils/base"));
describe('Get users resource of the API', () => {
    let response;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        response = yield api_helper_1.default.getUsers('users');
    }));
    it('verify the response status of the get users resource', () => {
        (0, chai_1.expect)(response.status, 'expect response to be 200').to.eql(200);
    });
    it('verify the data length of the get users resource', () => {
        (0, chai_1.expect)(response.data.per_page).to.eql(6);
        (0, chai_1.expect)(response.data.data.length).to.lessThanOrEqual(6);
    });
    it('verify the object property of the users data', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        for (let i = 0; i < response.data.data.length - 1; i++) {
            (0, chai_1.expect)(Object.getOwnPropertyNames(response.data.data[i])).to.include(base_1.default.dataUserProperty[i]);
        }
    });
    it('verify the page of the data to be 1', () => {
        (0, chai_1.expect)(response.data.page, 'expect page to be 1').to.eql(1);
    });
    it('verify the page of the data to be 2', () => __awaiter(void 0, void 0, void 0, function* () {
        response = yield api_helper_1.default.getUsers('users?page=2');
        (0, chai_1.expect)(response.data.page, 'expect page to be 2').to.eql(2);
    }));
});
describe('GET user resource of the API', () => {
    let response;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        response = yield api_helper_1.default.getUser('users', 1);
    }));
    it('verify the status of the request', () => {
        (0, chai_1.expect)(response.status).to.eql(200);
    });
    it('verify the id number of the user ', () => {
        (0, chai_1.expect)(response.data.data.id).to.eql(1);
    });
    it('verify the object property of the user data', () => {
        const arrayLength = Object.keys(response.data.data);
        for (let i = 0; i < arrayLength.length - 1; i++) {
            (0, chai_1.expect)(Object.getOwnPropertyNames(response.data.data)).to.include(base_1.default.dataUserProperty[i]);
        }
    });
    it('verify user is not found', () => __awaiter(void 0, void 0, void 0, function* () {
        response = yield api_helper_1.default.userNotFound('user', 45);
        (0, chai_1.expect)(response.status).to.eql(404);
        (0, chai_1.expect)(response.statusText).to.eql("Not Found");
    }));
});
describe('GET resources of the API', () => {
    let response;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        response = yield api_helper_1.default.getResources('unknown');
    }));
    it('verify the response status of the resourcse', () => {
        (0, chai_1.expect)(response.status).to.eql(200);
    });
    it('verify the page of the resources', () => {
        (0, chai_1.expect)(response.data.page).to.eql(1);
        (0, chai_1.expect)(response.data.per_page).to.eql(6);
        (0, chai_1.expect)(response.data.total).to.eql(12);
        (0, chai_1.expect)(response.data.total_pages).to.eql(2);
    });
    it('verify the length of the resources api', () => {
        (0, chai_1.expect)(response.data.data.length).to.be.lessThanOrEqual(6);
    });
    it('verify the response data property of the resources', () => {
        for (let i = 0; i < response.data.data.length - 1; i++) {
            (0, chai_1.expect)(Object.getOwnPropertyNames(response.data.data[i])).to.include(base_1.default.dataResourceProperty[i]);
        }
    });
});
describe('GET resource API', () => {
    let response;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        response = yield api_helper_1.default.getResource('unknown', 2);
    }));
    it('verify the response status of the resource', () => {
        (0, chai_1.expect)(response.status).to.eql(200);
    });
    it('verify the response data id of the resource', () => {
        (0, chai_1.expect)(response.data.data.id).to.eql(2);
    });
    it('verify the response data property of the resource', () => {
        const arrayLength = Object.keys(response.data.data);
        for (let i = 0; i < arrayLength.length - 1; i++) {
            (0, chai_1.expect)(Object.getOwnPropertyNames(response.data.data)).to.include(base_1.default.dataResourceProperty[i]);
        }
    });
    it('verify the page not found on resouce', () => __awaiter(void 0, void 0, void 0, function* () {
        response = yield api_helper_1.default.getResource('unknown', 25);
        (0, chai_1.expect)(response.status).to.eql(404);
    }));
});
describe('create USER', () => {
    let response;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        response = yield api_helper_1.default.createUser('users', { name: base_1.default.dataProps.name, job: base_1.default.dataProps.job });
    }));
    it('verify user has been created', () => {
        (0, chai_1.expect)(response.status).to.eql(201);
    });
    it('verify the body of the response user data', () => {
        const arrayLength = Object.keys(response.data);
        for (let i = 0; i < arrayLength.length - 1; i++) {
            (0, chai_1.expect)(Object.getOwnPropertyNames(response.data)).to.include(base_1.default.dataCreationProperty[i]);
        }
    });
    it(`verify the value of the 'name' and 'job' property`, () => {
        (0, chai_1.expect)(response.data.name).to.eql(base_1.default.dataProps.name);
        (0, chai_1.expect)(response.data.job).to.eql(base_1.default.dataProps.job);
    });
});
describe('Login', () => {
    let response;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        response = yield api_helper_1.default.login('login', { email: base_1.default.dataProps.email, password: base_1.default.dataProps.password });
    }));
    it('verify account login', () => {
        (0, chai_1.expect)(response.status).to.eql(200);
    });
    it('verify the body of the response', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, no-prototype-builtins
        (0, chai_1.expect)(response.data.hasOwnProperty('token')).to.be.true;
    });
});
describe('Register', () => {
    let response;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        response = yield api_helper_1.default.register('register', { email: base_1.default.dataProps.email, password: base_1.default.dataProps.password });
    }));
    it('verify account has been created', () => {
        (0, chai_1.expect)(response.status).to.eql(200);
    });
    it('verify the body of the response', () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, no-prototype-builtins
        (0, chai_1.expect)(response.data.hasOwnProperty('token')).to.be.true;
        (0, chai_1.expect)(response.data.hasOwnProperty('id')).to.be.true;
    });
});
