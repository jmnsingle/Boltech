"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.listen('3333', function () {
    console.log('Server running on port 3333');
});
