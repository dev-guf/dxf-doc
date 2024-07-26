import { TableRecord } from "./table";
import { DxfWriter } from "..";
export declare class BlockRecord extends TableRecord {
    name: string;
    ownerHandle: string;
    static MODEL_SPACE: string;
    static PAPER_SPACE: string;
    constructor(name: string, handle: string, ownerHandle: string);
    protected writeTableRecord(writer: DxfWriter): void;
}
