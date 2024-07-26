"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dxf_writer_1 = require("./dxf-writer");
var entities_1 = require("./entities");
var header_variables_1 = require("./entities/header-variables");
var style_1 = require("./entities/style");
var DxfDocument = /** @class */ (function () {
    function DxfDocument() {
        this._nextHandle = 256;
        this.header = new entities_1.Section('HEADER');
        this.classes = new entities_1.Section('CLASSES');
        this.tables = new entities_1.Section('TABLES');
        this.blocks = new entities_1.Section('BLOCKS');
        this.entities = new entities_1.Section('ENTITIES');
        this.objects = new entities_1.Section('OBJECTS');
        this.addHeaderVariables(new header_variables_1.HeaderVariable('$ACADVER', new Map([[1, 'AC1021']])));
        var vportTable = new entities_1.Table('VPORT', this.nextHandle());
        this.ltypeTable = new entities_1.Table('LTYPE', this.nextHandle());
        this.addLineType(entities_1.LType.BY_BLOCK);
        this.addLineType(entities_1.LType.BY_LAYER);
        this.addLineType(entities_1.LType.CONTINUOUS);
        this.layerTable = new entities_1.Table('LAYER', this.nextHandle());
        this.addLayer(entities_1.Layer.LAYER_0);
        this.styleTable = new entities_1.Table('STYLE', this.nextHandle());
        this.addStyle(entities_1.Style.STANDARD);
        var viewTable = new entities_1.Table('VIEW', this.nextHandle());
        var ucsTable = new entities_1.Table('UCS', this.nextHandle());
        var appIdTable = new entities_1.Table('APPID', this.nextHandle());
        var acad = new entities_1.AppId('ACAD', this.nextHandle(), appIdTable.handle);
        appIdTable.entries.push(acad);
        var dimstyleTable = new entities_1.DimStyleTable(this.nextHandle());
        this.blockRecTable = new entities_1.Table('BLOCK_RECORD', this.nextHandle());
        this.addBlock(entities_1.BlockRecord.MODEL_SPACE);
        this.addBlock(entities_1.BlockRecord.PAPER_SPACE);
        this.tables.entities.push(vportTable, this.ltypeTable, this.layerTable, this.styleTable, viewTable, ucsTable, appIdTable, dimstyleTable, this.blockRecTable);
        var mainDict = new entities_1.Dictionary(this.nextHandle());
        var acadGroup = new entities_1.Dictionary(this.nextHandle(), mainDict.handle);
        mainDict.entries[entities_1.Dictionary.ACAD_GROUP] = acadGroup.handle;
        this.objects.entities.push(mainDict, acadGroup);
    }
    DxfDocument.prototype.addHeaderVariables = function () {
        var _this = this;
        var variables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            variables[_i] = arguments[_i];
        }
        variables.forEach(function (v) { return _this.header.entities.push(v); });
    };
    DxfDocument.prototype.addLayer = function (name) {
        var layer = new entities_1.Layer(name, this.nextHandle(), this.layerTable.handle);
        this.layerTable.entries.push(layer);
        return layer;
    };
    DxfDocument.prototype.addLineType = function (name, dashes) {
        var ltype = new entities_1.LType(name, this.nextHandle(), this.ltypeTable.handle, dashes);
        this.ltypeTable.entries.push(ltype);
        return ltype;
    };
    DxfDocument.prototype.addStyle = function (name, font, flags) {
        if (font === void 0) { font = entities_1.Style.FONT_DEFAULT; }
        if (flags === void 0) { flags = style_1.StyleFlags.NONE; }
        var style = new entities_1.Style(name, font, this.nextHandle(), this.styleTable.handle, flags);
        this.styleTable.entries.push(style);
        return style;
    };
    DxfDocument.prototype.addBlock = function (name) {
        var blockRec = new entities_1.BlockRecord(name, this.nextHandle(), this.blockRecTable.handle);
        this.blockRecTable.entries.push(blockRec);
        var block = new entities_1.Block(name, this.nextHandle(), blockRec.handle);
        var blockEnd = new entities_1.BlockEnd(this.nextHandle(), blockRec.handle);
        this.blocks.entities.push(block, blockEnd);
        return block;
    };
    DxfDocument.prototype.addEntity = function (entity) {
        this.entities.entities.push(entity);
    };
    DxfDocument.prototype.addEntities = function () {
        var _this = this;
        var entities = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            entities[_i] = arguments[_i];
        }
        entities.forEach(function (entity) { return _this.addEntity(entity); });
    };
    DxfDocument.prototype.nextHandle = function () {
        return (this._nextHandle++).toString(16).toUpperCase();
    };
    DxfDocument.prototype.dxf = function () {
        var writer = new dxf_writer_1.DxfTextWriter();
        this.addHeaderVariables(new header_variables_1.HeaderVariable('$HANDSEED', new Map([[5, this._nextHandle.toString(16).toUpperCase()]])));
        this.header.writeDxf(writer);
        this.classes.writeDxf(writer);
        this.tables.writeDxf(writer);
        this.blocks.writeDxf(writer);
        this.entities.writeDxf(writer);
        this.objects.writeDxf(writer);
        writer.writeGroup(0, 'EOF');
        return writer.text;
    };
    DxfDocument.prototype.extents = function (min, max) {
        this.addHeaderVariables(new header_variables_1.HeaderVariable('$EXTMIN', new Map([[10, min[0]], [20, min[1]]])), new header_variables_1.HeaderVariable('$EXTMAX', new Map([[10, max[0]], [20, max[1]]])));
    };
    DxfDocument.prototype.limits = function (min, max) {
        this.addHeaderVariables(new header_variables_1.HeaderVariable('$LIMMIN', new Map([[10, min[0]], [20, min[1]]])), new header_variables_1.HeaderVariable('$LIMMAX', new Map([[10, max[0]], [20, max[1]]])));
    };
    return DxfDocument;
}());
exports.DxfDocument = DxfDocument;
