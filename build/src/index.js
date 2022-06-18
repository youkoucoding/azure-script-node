"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appSerivice_1 = __importDefault(require("./models/appSerivice"));
(0, appSerivice_1.default)().catch(console.error);
