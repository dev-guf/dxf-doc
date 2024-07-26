import { TableRecord } from "./table";
import { DxfWriter } from "..";
export declare class AppId extends TableRecord {
    name: string;
    ownerHandle: string;
    constructor(name: string, handle: string, ownerHandle: string);
    protected writeTableRecord(writer: DxfWriter): void;
}
