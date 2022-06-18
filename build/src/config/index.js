"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientSecret = exports.tanentId = exports.clientId = exports.appserviceName = exports.resourceGroupName = exports.subscriptionId = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.subscriptionId = process.env.SUBSCRIPTION_ID || 'test';
exports.resourceGroupName = process.env.RESOURCCE_GROIP_NAME || 'test';
exports.appserviceName = process.env.APP_SERVICES_NAME || 'test';
exports.clientId = process.env.AZURE_CLIENT_ID;
exports.tanentId = process.env.AZURE_TANENT_ID;
exports.clientSecret = process.env.AZURE_CLIENT_SECRET;
