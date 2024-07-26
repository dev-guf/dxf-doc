"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
var layer_1 = require("./layer");
var ltype_1 = require("./ltype");
var Entity = /** @class */ (function () {
    function Entity(recordName, handle, ownerHandle) {
        this.recordName = recordName;
        this.handle = handle;
        this.ownerHandle = ownerHandle;
    }
    Entity.prototype.writeDxf = function (writer) {
        writer.writeGroup(0, this.recordName);
        writer.writeGroup(5, this.handle);
        if (this.ownerHandle) {
            writer.writeGroup(330, this.ownerHandle);
        }
        writer.writeGroup(100, 'AcDbEntity');
        writer.writeGroup(8, this.layer ? this.layer : layer_1.Layer.LAYER_0);
        writer.writeGroup(6, this.ltype ? this.ltype : ltype_1.LType.BY_LAYER);
        if (this.color) {
            writer.writeGroup(62, this.color);
        }
        if (this.lineWeight) {
            writer.writeGroup(370, this.lineWeight);
        }
        this.writeEntity(writer);
    };
    return Entity;
}());
exports.Entity = Entity;
