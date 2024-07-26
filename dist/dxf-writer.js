"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DxfTextWriter = /** @class */ (function () {
    function DxfTextWriter() {
        this.text = '';
    }
    DxfTextWriter.prototype.writeLine = function (s) {
        this.text += s + "\n";
    };
    DxfTextWriter.prototype.writeGroup = function (code, value) {
        this.writeLine(code.toString());
        if (typeof value === 'number' && !Number.isInteger(value)) {
            value = value.toFixed(4);
        }
        this.writeLine(value);
    };
    return DxfTextWriter;
}());
exports.DxfTextWriter = DxfTextWriter;
