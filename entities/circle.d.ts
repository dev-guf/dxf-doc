import { Entity } from ".";
import { DxfWriter, DxfDocument } from "..";
export declare class Circle extends Entity {
    cx: number;
    cy: number;
    r: number;
    constructor(doc: DxfDocument, cx: number, cy: number, r: number, ownerHandle?: string);
    protected writeEntity(writer: DxfWriter): void;
}
