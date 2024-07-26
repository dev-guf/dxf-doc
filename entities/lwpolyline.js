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
exports.LwPolyline = void 0;
var _1 = require("./entity");
var LwPolyline = /** @class */ (function (_super) {
    __extends(LwPolyline, _super);
    function LwPolyline(doc, points, isClosed, ownerHandle) {
        var _this = _super.call(this, 'LWPOLYLINE', doc.nextHandle(), ownerHandle) || this;
        _this.points = points;
        _this.isClosed = isClosed;
        return _this;
    }
    LwPolyline.prototype.writeEntity = function (writer) {
        writer.writeGroup(100, 'AcDbPolyline');
        writer.writeGroup(90, this.points.length);
        writer.writeGroup(70, this.isClosed ? 1 : 0);
        this.points.forEach(function (p) {
            writer.writeGroup(10, p[0]);
            writer.writeGroup(20, p[1]);
        });
    };
    return LwPolyline;
}(_1.Entity));
exports.LwPolyline = LwPolyline;
