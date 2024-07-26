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
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line(doc, x1, y1, x2, y2, ownerHandle) {
        var _this = _super.call(this, 'LINE', doc.nextHandle(), ownerHandle) || this;
        _this.x1 = x1;
        _this.y1 = y1;
        _this.x2 = x2;
        _this.y2 = y2;
        return _this;
    }
    Line.prototype.writeEntity = function (writer) {
        writer.writeGroup(100, 'AcDbLine');
        writer.writeGroup(10, this.x1);
        writer.writeGroup(20, this.y1);
        writer.writeGroup(11, this.x2);
        writer.writeGroup(21, this.y2);
    };
    return Line;
}(_1.Entity));
exports.Line = Line;
