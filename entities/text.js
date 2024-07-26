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
var TextAlign;
(function (TextAlign) {
    TextAlign[TextAlign["LEFT"] = 0] = "LEFT";
    TextAlign[TextAlign["CENTER"] = 1] = "CENTER";
    TextAlign[TextAlign["RIGHT"] = 2] = "RIGHT";
    TextAlign[TextAlign["ALIGNED"] = 3] = "ALIGNED";
    TextAlign[TextAlign["MIDDLE"] = 4] = "MIDDLE";
    TextAlign[TextAlign["FIT"] = 5] = "FIT";
})(TextAlign = exports.TextAlign || (exports.TextAlign = {}));
var TextVerticalAlign;
(function (TextVerticalAlign) {
    TextVerticalAlign[TextVerticalAlign["BASELINE"] = 0] = "BASELINE";
    TextVerticalAlign[TextVerticalAlign["BOTTOM"] = 1] = "BOTTOM";
    TextVerticalAlign[TextVerticalAlign["MIDDLE"] = 2] = "MIDDLE";
    TextVerticalAlign[TextVerticalAlign["TOP"] = 3] = "TOP";
})(TextVerticalAlign = exports.TextVerticalAlign || (exports.TextVerticalAlign = {}));
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(doc, text, height, alignPoint, align, secondAlignPoint, valign, rotation, ownerHandle) {
        var _this = _super.call(this, 'TEXT', doc.nextHandle(), ownerHandle) || this;
        _this.text = text;
        _this.height = height;
        _this.alignPoint = alignPoint;
        _this.align = align;
        _this.secondAlignPoint = secondAlignPoint;
        _this.valign = valign;
        _this.rotation = rotation;
        return _this;
    }
    Text.prototype.writeEntity = function (writer) {
        writer.writeGroup(100, 'AcDbText');
        if (this.style) {
            writer.writeGroup(7, this.style);
        }
        writer.writeGroup(10, this.alignPoint[0]);
        writer.writeGroup(20, this.alignPoint[1]);
        writer.writeGroup(40, this.height);
        writer.writeGroup(1, this.text);
        if (this.rotation) {
            writer.writeGroup(50, this.rotation);
        }
        if (this.style) {
            writer.writeGroup(7, this.style);
        }
        if (this.align) {
            writer.writeGroup(72, this.align);
        }
        if (this.secondAlignPoint) {
            writer.writeGroup(11, this.secondAlignPoint[0]);
            writer.writeGroup(21, this.secondAlignPoint[1]);
        }
        writer.writeGroup(100, 'AcDbText');
        if (this.valign) {
            writer.writeGroup(73, this.valign);
        }
    };
    return Text;
}(_1.Entity));
exports.Text = Text;
