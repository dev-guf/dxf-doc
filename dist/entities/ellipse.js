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
var Ellipse = /** @class */ (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse(doc, cx, cy, majorAxisDx, majorAxisDy, axisRatio, startAngle, endAngle, ownerHandle) {
        if (startAngle === void 0) { startAngle = 0; }
        if (endAngle === void 0) { endAngle = 360; }
        var _this = _super.call(this, 'ELLIPSE', doc.nextHandle(), ownerHandle) || this;
        _this.cx = cx;
        _this.cy = cy;
        _this.majorAxisDx = majorAxisDx;
        _this.majorAxisDy = majorAxisDy;
        _this.axisRatio = axisRatio;
        _this.startAngle = startAngle;
        _this.endAngle = endAngle;
        return _this;
    }
    Ellipse.prototype.writeEntity = function (writer) {
        writer.writeGroup(100, 'AcDbEllipse');
        writer.writeGroup(10, this.cx);
        writer.writeGroup(20, this.cy);
        writer.writeGroup(11, this.majorAxisDx);
        writer.writeGroup(21, this.majorAxisDy);
        writer.writeGroup(40, this.axisRatio);
        writer.writeGroup(41, this.startAngle * Math.PI / 180);
        writer.writeGroup(42, this.endAngle * Math.PI / 180);
    };
    return Ellipse;
}(_1.Entity));
exports.Ellipse = Ellipse;
