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
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(doc, cx, cy, r, ownerHandle) {
        var _this = _super.call(this, 'CIRCLE', doc.nextHandle(), ownerHandle) || this;
        _this.cx = cx;
        _this.cy = cy;
        _this.r = r;
        return _this;
    }
    Circle.prototype.writeEntity = function (writer) {
        writer.writeGroup(100, 'AcDbCircle');
        writer.writeGroup(10, this.cx);
        writer.writeGroup(20, this.cy);
        writer.writeGroup(40, this.r);
    };
    return Circle;
}(_1.Entity));
exports.Circle = Circle;
