"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
    },
    category: {
        // todo:外建
        type: String,
    },
    stock: {
        type: Number,
        default: 0,
    },
    publishAt: {
        type: Number,
        default: null,
    },
    createdAt: {
        type: Number,
        default: Date.now
    },
    updateAt: {
        type: Number,
        default: Date.now
    }
});
exports.default = bookSchema;
