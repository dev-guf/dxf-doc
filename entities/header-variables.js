"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderVariable = void 0;
var HeaderVariable = /** @class */ (function () {
    function HeaderVariable(name, groups) {
        this.name = name;
        this.groups = groups;
    }
    HeaderVariable.prototype.writeDxf = function (writer) {
        writer.writeGroup(9, this.name);
        this.groups.forEach(function (value, code) { return writer.writeGroup(code, value); });
    };
    return HeaderVariable;
}());
exports.HeaderVariable = HeaderVariable;
