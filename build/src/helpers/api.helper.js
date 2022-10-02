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
Object.defineProperty(exports, "__esModule", { value: true });
const httpFile_1 = require("./../config/httpFile");
class ApiHelper {
    constructor() {
        this.getUsers = (endpoint) => __awaiter(this, void 0, void 0, function* () {
            return httpFile_1.HttpClient.get(endpoint);
        });
        this.getUser = (endpoint, id) => __awaiter(this, void 0, void 0, function* () {
            return httpFile_1.HttpClient.get(endpoint, id);
        });
        this.createUser = (endpoint, data) => __awaiter(this, void 0, void 0, function* () {
            return httpFile_1.HttpClient.post(endpoint, data);
        });
        this.updateUser = (endpoint, data, id) => __awaiter(this, void 0, void 0, function* () {
            return httpFile_1.HttpClient.put(endpoint, data, id);
        });
        this.deleteUser = (endpoint, id) => __awaiter(this, void 0, void 0, function* () {
            return httpFile_1.HttpClient.delete(endpoint, id);
        });
        this.userNotFound = (endpoint, id) => __awaiter(this, void 0, void 0, function* () {
            return httpFile_1.HttpClient.get(endpoint, id);
        });
        this.getResources = (endpoint) => __awaiter(this, void 0, void 0, function* () {
            return httpFile_1.HttpClient.get(endpoint);
        });
        this.getResource = (endpoint, id) => __awaiter(this, void 0, void 0, function* () {
            return httpFile_1.HttpClient.get(endpoint, id);
        });
        this.resourceNotFound = (endpoint, id) => __awaiter(this, void 0, void 0, function* () {
            return httpFile_1.HttpClient.get(endpoint, id);
        });
        this.register = (endpoint, data) => __awaiter(this, void 0, void 0, function* () {
            return httpFile_1.HttpClient.post(endpoint, data);
        });
        this.login = (endpoint, data) => __awaiter(this, void 0, void 0, function* () {
            return httpFile_1.HttpClient.post(endpoint, data);
        });
        this.delayResponse = (endpoint) => __awaiter(this, void 0, void 0, function* () {
            return httpFile_1.HttpClient.get(endpoint);
        });
    }
}
exports.default = new ApiHelper();
