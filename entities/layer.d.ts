import { DxfWriter } from "..";
import { TableRecord } from "./table";
export declare class Layer extends TableRecord {
    name: string;
    ownerHandle: string;
    static LAYER_0: string;
    constructor(name: string, handle: string, ownerHandle: string);
    protected writeTableRecord(writer: DxfWriter): void;
}
