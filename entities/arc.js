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
exports.Arc = void 0;
var _1 = require("./entity");
var Arc = /** @class */ (function (_super) {
    __extends(Arc, _super);
    function Arc(doc, cx, cy, r, startAngle, endAngle, ownerHandle) {
        var _this = _super.call(this, 'ARC', doc.nextHandle(), ownerHandle) || this;
        _this.cx = cx;
        _this.cy = cy;
        _this.r = r;
        _this.startAngle = startAngle;
        _this.endAngle = endAngle;
        return _this;
    }
    Arc.prototype.writeEntity = function (writer) {
        writer.writeGroup(100, 'AcDbCircle');
        writer.writeGroup(10, this.cx);
        writer.writeGroup(20, this.cy);
        writer.writeGroup(40, this.r);
        writer.writeGroup(100, 'AcDbArc');
        writer.writeGroup(50, this.startAngle);
        writer.writeGroup(51, this.endAngle);
    };
    return Arc;
}(_1.Entity));
exports.Arc = Arc;
