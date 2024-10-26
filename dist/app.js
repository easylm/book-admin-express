"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("./routes/book"));
const express_1 = __importDefault(require("express"));
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = (0, express_1.default)();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// 添加中间件，记录开发环境日志
app.use(logger('dev'));
// 添加中间件，解析json格式
app.use(express_1.default.json());
// 添加中间件，解析urlcoded格式，只解析一次
app.use(express_1.default.urlencoded({ extended: false }));
// 添加中间件，解析cookie
app.use(cookieParser());
// 添加中间件，静态文件服务
app.use(express_1.default.static(path.join(__dirname, 'public')));
app.use('/book', book_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
app.listen('3005', () => {
    console.log('server sstart at 3005');
});
module.exports = app;
