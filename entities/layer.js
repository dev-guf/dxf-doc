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
var ltype_1 = require("./ltype");
var Layer = /** @class */ (function (_super) {
    __extends(Layer, _super);
    function Layer(name, handle, ownerHandle) {
        var _this = _super.call(this, 'LAYER', handle, ownerHandle) || this;
        _this.name = name;
        _this.ownerHandle = ownerHandle;
        return _this;
    }
    Layer.prototype.writeTableRecord = function (writer) {
        writer.writeGroup(100, 'AcDbLayerTableRecord');
        writer.writeGroup(2, this.name);
        writer.writeGroup(70, 0);
        writer.writeGroup(62, 7);
        writer.writeGroup(6, ltype_1.LType.CONTINUOUS);
        writer.writeGroup(390, 0);
    };
    Layer.LAYER_0 = '0';
    return Layer;
}(table_1.TableRecord));
exports.Layer = Layer;
