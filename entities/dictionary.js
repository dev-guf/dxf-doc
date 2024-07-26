"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dictionary = void 0;
var Dictionary = /** @class */ (function () {
    function Dictionary(handle, ownerHandle) {
        this.handle = handle;
        this.ownerHandle = ownerHandle;
        this.entries = {};
    }
    Dictionary.prototype.writeDxf = function (writer) {
        var _this = this;
        writer.writeGroup(0, 'DICTIONARY');
        writer.writeGroup(5, this.handle);
        if (this.ownerHandle) {
            writer.writeGroup(330, this.ownerHandle);
        }
        writer.writeGroup(100, 'AcDbDictionary');
        writer.writeGroup(281, 1);
        Object.keys(this.entries).forEach(function (key) {
            writer.writeGroup(3, key);
            writer.writeGroup(350, _this.entries[key]);
        });
    };
    Dictionary.ACAD_GROUP = 'ACAD_GROUP';
    return Dictionary;
}());
exports.Dictionary = Dictionary;
