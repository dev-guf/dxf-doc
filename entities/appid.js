"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var table_1 = require("./table");
var AppId = /** @class */ (function (_super) {
    __extends(AppId, _super);
    function AppId(name, handle, ownerHandle) {
        var _this = _super.call(this, 'APPID', handle, ownerHandle) || this;
        _this.name = name;
        _this.ownerHandle = ownerHandle;
        return _this;
    }
    AppId.prototype.writeTableRecord = function (writer) {
        writer.writeGroup(100, 'AcDbRegAppTableRecord');
        writer.writeGroup(2, this.name);
        writer.writeGroup(70, 0);
    };
    return AppId;
}(table_1.TableRecord));
exports.AppId = AppId;
