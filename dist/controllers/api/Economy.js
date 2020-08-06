"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EconomyController = void 0;
const common_1 = require("@tsed/common");
const base_1 = require("../base");
let EconomyController = class EconomyController extends base_1.default {
};
EconomyController = __decorate([
    common_1.Controller('/economy')
], EconomyController);
exports.EconomyController = EconomyController;
//# sourceMappingURL=Economy.js.map