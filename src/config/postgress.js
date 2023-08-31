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
exports.client = void 0;
const { Client } = require("pg");
function client() {
    return __awaiter(this, void 0, void 0, function* () {
        const cliente = new Client({
            user: "postgres",
            host: "containers-us-west-131.railway.app",
            database: "railway",
            password: "8Ti8ShEyb74nEBbEej6c",
            port: 6464,
        });
    });
}
exports.client = client;
