import { DxfObject } from "../dxf-object";
import { DxfWriter } from "..";
export declare class HeaderVariable implements DxfObject {
    name: string;
    groups: Map<number, string | number>;
    constructor(name: string, groups: Map<number, string | number>);
    writeDxf(writer: DxfWriter): void;
}
