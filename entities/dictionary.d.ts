import { DxfObject } from "../dxf-object";
import { DxfWriter } from "..";
export interface DictionaryEntry {
    [name: string]: string;
}
export declare class Dictionary implements DxfObject {
    handle: string;
    ownerHandle?: string | undefined;
    static ACAD_GROUP: string;
    entries: DictionaryEntry;
    constructor(handle: string, ownerHandle?: string | undefined);
    writeDxf(writer: DxfWriter): void;
}
