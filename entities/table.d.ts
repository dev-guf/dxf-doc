import { DxfObject } from "../dxf-object";
import { DxfWriter } from "..";
export declare class Table implements DxfObject {
    name: string;
    handle: string;
    entries: TableRecord[];
    constructor(name: string, handle: string);
    writeDxf(writer: DxfWriter): void;
    protected writeTableDetails(writer: DxfWriter): void;
}
export declare class DimStyleTable extends Table {
    constructor(handle: string);
    protected writeTableDetails(writer: DxfWriter): void;
}
export declare abstract class TableRecord implements DxfObject {
    recordName: string;
    handle: string;
    ownerHandle: string;
    constructor(recordName: string, handle: string, ownerHandle: string);
    protected handleGroupCode(): number;
    writeDxf(writer: DxfWriter): void;
    protected abstract writeTableRecord(writer: DxfWriter): void;
}
