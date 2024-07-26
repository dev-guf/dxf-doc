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
var BlockRecord = /** @class */ (function (_super) {
    __extends(BlockRecord, _super);
    function BlockRecord(name, handle, ownerHandle) {
        var _this = _super.call(this, 'BLOCK_RECORD', handle, ownerHandle) || this;
        _this.name = name;
        _this.ownerHandle = ownerHandle;
        return _this;
    }
    BlockRecord.prototype.writeTableRecord = function (writer) {
        writer.writeGroup(100, 'AcDbBlockTableRecord');
        writer.writeGroup(2, this.name);
        writer.writeGroup(340, 0);
    };
    BlockRecord.MODEL_SPACE = '*Model_Space';
    BlockRecord.PAPER_SPACE = '*Paper_Space';
    return BlockRecord;
}(table_1.TableRecord));
exports.BlockRecord = BlockRecord;
