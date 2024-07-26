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
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block(name, handle, ownerHandle) {
        var _this = _super.call(this, 'BLOCK', handle, ownerHandle) || this;
        _this.name = name;
        _this.entities = [];
        return _this;
    }
    Block.prototype.writeEntity = function (writer) {
        writer.writeGroup(100, 'AcDbBlockBegin');
        writer.writeGroup(2, this.name);
        writer.writeGroup(70, 0);
        writer.writeGroup(10, 0);
        writer.writeGroup(20, 0);
        writer.writeGroup(30, 0);
        writer.writeGroup(3, this.name);
        writer.writeGroup(1, '');
        this.entities.forEach(function (x) { return x.writeDxf(writer); });
    };
    return Block;
}(_1.Entity));
exports.Block = Block;
var BlockEnd = /** @class */ (function (_super) {
    __extends(BlockEnd, _super);
    function BlockEnd(handle, ownerHandle) {
        return _super.call(this, 'ENDBLK', handle, ownerHandle) || this;
    }
    BlockEnd.prototype.writeEntity = function (writer) {
        writer.writeGroup(100, 'AcDbBlockEnd');
    };
    return BlockEnd;
}(_1.Entity));
exports.BlockEnd = BlockEnd;
