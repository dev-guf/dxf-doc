import { Entity } from ".";
import { DxfDocument, DxfWriter } from "..";
export declare class Arc extends Entity {
    cx: number;
    cy: number;
    r: number;
    startAngle: number;
    endAngle: number;
    constructor(doc: DxfDocument, cx: number, cy: number, r: number, startAngle: number, endAngle: number, ownerHandle?: string);
    protected writeEntity(writer: DxfWriter): void;
}
