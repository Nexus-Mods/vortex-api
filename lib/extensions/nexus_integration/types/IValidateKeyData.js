"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAccountStatus = void 0;
var IAccountStatus;
(function (IAccountStatus) {
    IAccountStatus[IAccountStatus["Premium"] = 0] = "Premium";
    IAccountStatus[IAccountStatus["Supporter"] = 1] = "Supporter";
    IAccountStatus[IAccountStatus["Free"] = 2] = "Free";
    IAccountStatus[IAccountStatus["Banned"] = 3] = "Banned";
    IAccountStatus[IAccountStatus["Closed"] = 4] = "Closed";
})(IAccountStatus || (exports.IAccountStatus = IAccountStatus = {}));
