"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
var Section = /** @class */ (function () {
    function Section(name) {
        this.name = name;
        this.entities = [];
    }
    Section.prototype.writeDxf = function (writer) {
        writer.writeGroup(0, 'SECTION');
        writer.writeGroup(2, this.name);
        this.entities.forEach(function (x) { return x.writeDxf(writer); });
        writer.writeGroup(0, 'ENDSEC');
    };
    return Section;
}());
exports.Section = Section;
