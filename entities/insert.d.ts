import { Entity } from ".";
import { DxfDocument, DxfWriter } from "..";
export declare class Insert extends Entity {
    blockName: string;
    x: number;
    y: number;
    rotation: number;
    scaleX: number;
    scaleY: number;
    scaleZ: number;
    constructor(doc: DxfDocument, blockName: string, x: number, y: number, rotation?: number, scaleX?: number, scaleY?: number, scaleZ?: number, ownerHandle?: string);
    protected writeEntity(writer: DxfWriter): void;
}
