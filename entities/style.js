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
var StyleFlags;
(function (StyleFlags) {
    StyleFlags[StyleFlags["NONE"] = 2] = "NONE";
    StyleFlags[StyleFlags["ITALIC"] = 16777216] = "ITALIC";
    StyleFlags[StyleFlags["BOLD"] = 33554432] = "BOLD";
})(StyleFlags = exports.StyleFlags || (exports.StyleFlags = {}));
var Style = /** @class */ (function (_super) {
    __extends(Style, _super);
    function Style(name, font, handle, ownerHandle, styleFlags, verticalText, fixedHeight, widthFactor, obliqueAngle, backwardText, updownText, bigfont) {
        if (styleFlags === void 0) { styleFlags = StyleFlags.NONE; }
        if (verticalText === void 0) { verticalText = false; }
        if (fixedHeight === void 0) { fixedHeight = false; }
        if (widthFactor === void 0) { widthFactor = 1; }
        if (obliqueAngle === void 0) { obliqueAngle = 0; }
        if (backwardText === void 0) { backwardText = false; }
        if (updownText === void 0) { updownText = false; }
        if (bigfont === void 0) { bigfont = ''; }
        var _this = _super.call(this, 'STYLE', handle, ownerHandle) || this;
        _this.name = name;
        _this.font = font;
        _this.ownerHandle = ownerHandle;
        _this.styleFlags = styleFlags;
        _this.verticalText = verticalText;
        _this.fixedHeight = fixedHeight;
        _this.widthFactor = widthFactor;
        _this.obliqueAngle = obliqueAngle;
        _this.backwardText = backwardText;
        _this.updownText = updownText;
        _this.bigfont = bigfont;
        return _this;
    }
    Style.prototype.writeTableRecord = function (writer) {
        writer.writeGroup(100, 'AcDbTextStyleTableRecord');
        writer.writeGroup(2, this.name);
        writer.writeGroup(70, this.verticalText ? 4 : 0);
        writer.writeGroup(40, this.fixedHeight ? 1 : 0);
        writer.writeGroup(41, this.widthFactor);
        writer.writeGroup(50, this.obliqueAngle);
        writer.writeGroup(71, (this.backwardText ? 2 : 0) | (this.updownText ? 4 : 0));
        writer.writeGroup(42, 1);
        writer.writeGroup(3, this.font);
        writer.writeGroup(4, this.bigfont);
        if (this.styleFlags != StyleFlags.NONE) {
            writer.writeGroup(1001, 'ACAD');
            writer.writeGroup(1000, this.font);
            writer.writeGroup(1071, this.styleFlags);
        }
    };
    Style.STANDARD = 'Standard';
    Style.FONT_DEFAULT = 'txt';
    return Style;
}(table_1.TableRecord));
exports.Style = Style;
