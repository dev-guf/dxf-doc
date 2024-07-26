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
var Table = /** @class */ (function () {
    function Table(name, handle) {
        this.name = name;
        this.handle = handle;
        this.entries = [];
    }
    Table.prototype.writeDxf = function (writer) {
        writer.writeGroup(0, 'TABLE');
        writer.writeGroup(2, this.name);
        writer.writeGroup(5, this.handle);
        writer.writeGroup(330, 0);
        writer.writeGroup(100, 'AcDbSymbolTable');
        writer.writeGroup(70, this.entries.length);
        this.writeTableDetails(writer);
        this.entries.forEach(function (x) { return x.writeDxf(writer); });
        writer.writeGroup(0, 'ENDTAB');
    };
    Table.prototype.writeTableDetails = function (writer) {
    };
    return Table;
}());
exports.Table = Table;
var DimStyleTable = /** @class */ (function (_super) {
    __extends(DimStyleTable, _super);
    function DimStyleTable(handle) {
        return _super.call(this, 'DIMSTYLE', handle) || this;
    }
    DimStyleTable.prototype.writeTableDetails = function (writer) {
        writer.writeGroup(100, 'AcDbDimStyleTable');
    };
    return DimStyleTable;
}(Table));
exports.DimStyleTable = DimStyleTable;
var TableRecord = /** @class */ (function () {
    function TableRecord(recordName, handle, ownerHandle) {
        this.recordName = recordName;
        this.handle = handle;
        this.ownerHandle = ownerHandle;
    }
    TableRecord.prototype.handleGroupCode = function () {
        return 5;
    };
    TableRecord.prototype.writeDxf = function (writer) {
        writer.writeGroup(0, this.recordName);
        writer.writeGroup(this.handleGroupCode(), this.handle);
        writer.writeGroup(330, this.ownerHandle);
        writer.writeGroup(100, 'AcDbSymbolTableRecord');
        this.writeTableRecord(writer);
    };
    return TableRecord;
}());
exports.TableRecord = TableRecord;
