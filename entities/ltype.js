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
exports.LType = void 0;
var table_1 = require("./table");
var LType = /** @class */ (function (_super) {
    __extends(LType, _super);
    function LType(name, handle, ownerHandle, dashes) {
        if (dashes === void 0) { dashes = []; }
        var _this = _super.call(this, 'LTYPE', handle, ownerHandle) || this;
        _this.name = name;
        _this.ownerHandle = ownerHandle;
        _this.dashes = dashes;
        return _this;
    }
    LType.prototype.writeTableRecord = function (writer) {
        writer.writeGroup(100, 'AcDbLinetypeTableRecord');
        writer.writeGroup(2, this.name);
        writer.writeGroup(70, 0);
        writer.writeGroup(3, '');
        writer.writeGroup(72, 65);
        writer.writeGroup(73, this.dashes.length);
        var len = this.dashes.reduce(function (acc, dash) { return acc + dash; }, 0);
        writer.writeGroup(40, len);
        this.dashes.forEach(function (x, i) {
            writer.writeGroup(49, x * (i % 2 === 0 ? 1 : -1));
            writer.writeGroup(74, 0);
        });
    };
    LType.BY_LAYER = 'ByLayer';
    LType.BY_BLOCK = 'ByBlock';
    LType.CONTINUOUS = 'Continuous';
    return LType;
}(table_1.TableRecord));
exports.LType = LType;
