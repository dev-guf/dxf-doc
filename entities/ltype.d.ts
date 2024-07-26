import { TableRecord } from "./table";
import { DxfWriter } from "..";
export declare class LType extends TableRecord {
    name: string;
    ownerHandle: string;
    dashes: number[];
    static BY_LAYER: string;
    static BY_BLOCK: string;
    static CONTINUOUS: string;
    constructor(name: string, handle: string, ownerHandle: string, dashes?: number[]);
    protected writeTableRecord(writer: DxfWriter): void;
}
