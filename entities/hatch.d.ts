import { Entity } from ".";
import { DxfDocument, DxfWriter } from "..";
import { DxfObject } from "../dxf-object";
export declare enum HatchStyle {
    NORMAL = 0,
    OUTER = 1,
    IGNORE = 2
}
export declare class Hatch extends Entity {
    boundaryPaths: HatchBoundaryPath[];
    pattern?: HatchPattern | undefined;
    hatchStyle: HatchStyle;
    constructor(doc: DxfDocument, boundaryPaths: HatchBoundaryPath[], pattern?: HatchPattern | undefined, hatchStyle?: HatchStyle, ownerHandle?: string);
    protected writeEntity(writer: DxfWriter): void;
}
export interface HatchPatterLine {
    angle: number;
    x: number;
    y: number;
    offsetX: number;
    offsetY: number;
    dashes: number[];
}
export declare class HatchPattern implements DxfObject {
    name: string;
    lines: HatchPatterLine[];
    static SOLID: string;
    constructor(name: string, lines: HatchPatterLine[]);
    static readFileAsync(path: string): Promise<HatchPattern[]>;
    writeDxf(writer: DxfWriter): void;
}
export declare abstract class HatchBoundaryPath implements DxfObject {
    abstract writeDxf(writer: DxfWriter): void;
}
export declare class PolylineBoundaryPath extends HatchBoundaryPath {
    points: [number, number][];
    constructor(points: [number, number][]);
    writeDxf(writer: DxfWriter): void;
}
export declare class EdgeBoundaryPath extends HatchBoundaryPath {
    private edges;
    line(x1: number, y1: number, x2: number, y2: number): void;
    acr(x: number, y: number, r: number, startAngle: number, endAngle: number, counterClockwise: boolean): void;
    ellipse(x: number, y: number, majorAxisDx: number, majorAxisDy: number, minorAxisPercenage: number, startAngle: number, endAngle: number, counterClockwise: boolean): void;
    writeDxf(writer: DxfWriter): void;
}
