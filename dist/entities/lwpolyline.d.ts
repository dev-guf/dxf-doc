import { Entity } from ".";
import { DxfWriter, DxfDocument } from "..";
export declare class LwPolyline extends Entity {
    points: [number, number][];
    isClosed: boolean;
    constructor(doc: DxfDocument, points: [number, number][], isClosed: boolean, ownerHandle?: string);
    protected writeEntity(writer: DxfWriter): void;
}
