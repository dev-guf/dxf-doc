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
var _1 = require(".");
var Insert = /** @class */ (function (_super) {
    __extends(Insert, _super);
    function Insert(doc, blockName, x, y, rotation, scaleX, scaleY, scaleZ, ownerHandle) {
        if (rotation === void 0) { rotation = 0; }
        if (scaleX === void 0) { scaleX = 1; }
        if (scaleY === void 0) { scaleY = 1; }
        if (scaleZ === void 0) { scaleZ = 1; }
        var _this = _super.call(this, 'INSERT', doc.nextHandle(), ownerHandle) || this;
        _this.blockName = blockName;
        _this.x = x;
        _this.y = y;
        _this.rotation = rotation;
        _this.scaleX = scaleX;
        _this.scaleY = scaleY;
        _this.scaleZ = scaleZ;
        return _this;
    }
    Insert.prototype.writeEntity = function (writer) {
        writer.writeGroup(100, 'AcDbBlockReference');
        writer.writeGroup(2, this.blockName);
        writer.writeGroup(10, this.x);
        writer.writeGroup(20, this.y);
        writer.writeGroup(41, this.scaleX);
        writer.writeGroup(42, this.scaleY);
        writer.writeGroup(43, this.scaleZ);
        writer.writeGroup(50, this.rotation);
    };
    return Insert;
}(_1.Entity));
exports.Insert = Insert;
