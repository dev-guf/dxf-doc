import { Entity } from ".";
import { DxfDocument, DxfWriter } from "..";
export declare class Ellipse extends Entity {
    cx: number;
    cy: number;
    majorAxisDx: number;
    majorAxisDy: number;
    axisRatio: number;
    startAngle: number;
    endAngle: number;
    constructor(doc: DxfDocument, cx: number, cy: number, majorAxisDx: number, majorAxisDy: number, axisRatio: number, startAngle?: number, endAngle?: number, ownerHandle?: string);
    protected writeEntity(writer: DxfWriter): void;
}
