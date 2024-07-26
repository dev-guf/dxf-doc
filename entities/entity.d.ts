import { DxfObject } from "../dxf-object";
import { DxfWriter } from "..";
export declare abstract class Entity implements DxfObject {
    recordName: string;
    handle: string;
    ownerHandle?: string | undefined;
    layer?: string;
    ltype?: string;
    color?: number;
    lineWeight?: number;
    constructor(recordName: string, handle: string, ownerHandle?: string | undefined);
    writeDxf(writer: DxfWriter): void;
    protected abstract writeEntity(writer: DxfWriter): void;
}
