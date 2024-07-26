import { DxfWriter } from "..";
import { DxfObject } from "../dxf-object";
export declare class Section implements DxfObject {
    name: string;
    entities: DxfObject[];
    constructor(name: string);
    writeDxf(writer: DxfWriter): void;
}
