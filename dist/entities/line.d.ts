import { Entity } from ".";
import { DxfWriter, DxfDocument } from "..";
export declare class Line extends Entity {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    constructor(doc: DxfDocument, x1: number, y1: number, x2: number, y2: number, ownerHandle?: string);
    protected writeEntity(writer: DxfWriter): void;
}
