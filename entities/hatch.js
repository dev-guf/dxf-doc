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
var HatchStyle;
(function (HatchStyle) {
    HatchStyle[HatchStyle["NORMAL"] = 0] = "NORMAL";
    HatchStyle[HatchStyle["OUTER"] = 1] = "OUTER";
    HatchStyle[HatchStyle["IGNORE"] = 2] = "IGNORE";
})(HatchStyle = exports.HatchStyle || (exports.HatchStyle = {}));
var Hatch = /** @class */ (function (_super) {
    __extends(Hatch, _super);
    function Hatch(doc, boundaryPaths, pattern, hatchStyle, ownerHandle) {
        if (hatchStyle === void 0) { hatchStyle = HatchStyle.NORMAL; }
        var _this = _super.call(this, 'HATCH', doc.nextHandle(), ownerHandle) || this;
        _this.boundaryPaths = boundaryPaths;
        _this.pattern = pattern;
        _this.hatchStyle = hatchStyle;
        return _this;
    }
    Hatch.prototype.writeEntity = function (writer) {
        writer.writeGroup(100, 'AcDbHatch');
        writer.writeGroup(10, 0);
        writer.writeGroup(20, 0);
        writer.writeGroup(30, 0);
        writer.writeGroup(210, 0);
        writer.writeGroup(220, 0);
        writer.writeGroup(230, 1);
        writer.writeGroup(2, this.pattern ? this.pattern.name : HatchPattern.SOLID);
        var isSolid = !this.pattern || this.pattern.name === HatchPattern.SOLID;
        writer.writeGroup(70, isSolid ? 1 : 0);
        writer.writeGroup(71, 0);
        writer.writeGroup(91, this.boundaryPaths.length);
        this.boundaryPaths.forEach(function (x) { return x.writeDxf(writer); });
        writer.writeGroup(75, this.hatchStyle);
        writer.writeGroup(76, 0);
        if (this.pattern) {
            writer.writeGroup(52, 0);
            writer.writeGroup(41, 1);
            writer.writeGroup(77, 0);
            this.pattern.writeDxf(writer);
        }
        writer.writeGroup(98, 0);
    };
    return Hatch;
}(_1.Entity));
exports.Hatch = Hatch;
var HatchPattern = /** @class */ (function () {
    function HatchPattern(name, lines) {
        this.name = name;
        this.lines = lines;
    }
    HatchPattern.parse = function (lines) {
        var result = [];
        var pattern = null;
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            line = line.trim();
            if (line.length) {
                // New pattern
                if (line[0] === '*') {
                    var nameMatch = line.match(/\*(\w+),?/);
                    if (nameMatch) {
                        pattern = new HatchPattern(nameMatch[1], []);
                        result.push(pattern);
                    }
                }
                // Line data
                else if (pattern) {
                    var lineData = line.split(',').map(function (x) { return parseFloat(x.trim()); });
                    if (lineData.length >= 5) {
                        var patternLine = {
                            angle: lineData[0],
                            x: lineData[1],
                            y: lineData[2],
                            offsetX: lineData[3],
                            offsetY: lineData[4],
                            dashes: lineData.slice(5)
                        };
                        pattern.lines.push(patternLine);
                    }
                }
            }
        }
        return result;
    };
    HatchPattern.prototype.writeDxf = function (writer) {
        writer.writeGroup(78, this.lines.length);
        this.lines.forEach(function (line) {
            writer.writeGroup(53, line.angle);
            writer.writeGroup(43, line.x);
            writer.writeGroup(44, line.y);
            writer.writeGroup(45, line.offsetX);
            writer.writeGroup(46, line.offsetY);
            var dashes = line.dashes || [];
            writer.writeGroup(79, dashes.length);
            dashes.forEach(function (dash) { return writer.writeGroup(49, dash); });
        });
    };
    HatchPattern.SOLID = 'SOLID';
    return HatchPattern;
}());
exports.HatchPattern = HatchPattern;
var HatchBoundaryPath = /** @class */ (function () {
    function HatchBoundaryPath() {
    }
    return HatchBoundaryPath;
}());
exports.HatchBoundaryPath = HatchBoundaryPath;
var PolylineBoundaryPath = /** @class */ (function (_super) {
    __extends(PolylineBoundaryPath, _super);
    function PolylineBoundaryPath(points) {
        var _this = _super.call(this) || this;
        _this.points = points;
        return _this;
    }
    PolylineBoundaryPath.prototype.writeDxf = function (writer) {
        writer.writeGroup(92, 3);
        writer.writeGroup(72, 0);
        writer.writeGroup(73, 1);
        writer.writeGroup(93, this.points.length);
        this.points.forEach(function (p) {
            writer.writeGroup(10, p[0]);
            writer.writeGroup(20, p[1]);
        });
        writer.writeGroup(97, 0);
    };
    return PolylineBoundaryPath;
}(HatchBoundaryPath));
exports.PolylineBoundaryPath = PolylineBoundaryPath;
var Edge = /** @class */ (function () {
    function Edge() {
    }
    return Edge;
}());
var LineEdge = /** @class */ (function (_super) {
    __extends(LineEdge, _super);
    function LineEdge(x1, y1, x2, y2) {
        var _this = _super.call(this) || this;
        _this.x1 = x1;
        _this.y1 = y1;
        _this.x2 = x2;
        _this.y2 = y2;
        return _this;
    }
    LineEdge.prototype.writeDxf = function (writer) {
        writer.writeGroup(72, 1);
        writer.writeGroup(10, this.x1);
        writer.writeGroup(20, this.y1);
        writer.writeGroup(11, this.x2);
        writer.writeGroup(21, this.y2);
    };
    return LineEdge;
}(Edge));
var ArcEdge = /** @class */ (function (_super) {
    __extends(ArcEdge, _super);
    function ArcEdge(x, y, r, startAngle, endAngle, counterClockwise) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.r = r;
        _this.startAngle = startAngle;
        _this.endAngle = endAngle;
        _this.counterClockwise = counterClockwise;
        return _this;
    }
    ArcEdge.prototype.writeDxf = function (writer) {
        writer.writeGroup(72, 2);
        writer.writeGroup(10, this.x);
        writer.writeGroup(20, this.y);
        writer.writeGroup(40, this.r);
        writer.writeGroup(50, this.startAngle);
        writer.writeGroup(51, this.endAngle);
        writer.writeGroup(73, this.counterClockwise ? 1 : 0);
    };
    return ArcEdge;
}(Edge));
var EllipseEdge = /** @class */ (function (_super) {
    __extends(EllipseEdge, _super);
    function EllipseEdge(x, y, majorAxisDx, majorAxisDy, minorAxisPercenage, startAngle, endAngle, counterClockwise) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.majorAxisDx = majorAxisDx;
        _this.majorAxisDy = majorAxisDy;
        _this.minorAxisPercenage = minorAxisPercenage;
        _this.startAngle = startAngle;
        _this.endAngle = endAngle;
        _this.counterClockwise = counterClockwise;
        return _this;
    }
    EllipseEdge.prototype.writeDxf = function (writer) {
        writer.writeGroup(72, 3);
        writer.writeGroup(10, this.x);
        writer.writeGroup(20, this.y);
        writer.writeGroup(11, this.majorAxisDx);
        writer.writeGroup(21, this.majorAxisDy);
        writer.writeGroup(40, this.minorAxisPercenage);
        writer.writeGroup(50, this.startAngle);
        writer.writeGroup(51, this.endAngle);
        writer.writeGroup(73, this.counterClockwise ? 1 : 0);
    };
    return EllipseEdge;
}(Edge));
var EdgeBoundaryPath = /** @class */ (function (_super) {
    __extends(EdgeBoundaryPath, _super);
    function EdgeBoundaryPath() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.edges = [];
        return _this;
    }
    EdgeBoundaryPath.prototype.line = function (x1, y1, x2, y2) {
        this.edges.push(new LineEdge(x1, y1, x2, y2));
    };
    EdgeBoundaryPath.prototype.acr = function (x, y, r, startAngle, endAngle, counterClockwise) {
        this.edges.push(new ArcEdge(x, y, r, startAngle, endAngle, counterClockwise));
    };
    EdgeBoundaryPath.prototype.ellipse = function (x, y, majorAxisDx, majorAxisDy, minorAxisPercenage, startAngle, endAngle, counterClockwise) {
        this.edges.push(new EllipseEdge(x, y, majorAxisDx, majorAxisDy, minorAxisPercenage, startAngle, endAngle, counterClockwise));
    };
    EdgeBoundaryPath.prototype.writeDxf = function (writer) {
        writer.writeGroup(92, 1);
        writer.writeGroup(93, this.edges.length);
        this.edges.forEach(function (x) { return x.writeDxf(writer); });
        writer.writeGroup(97, 0);
    };
    return EdgeBoundaryPath;
}(HatchBoundaryPath));
exports.EdgeBoundaryPath = EdgeBoundaryPath;
