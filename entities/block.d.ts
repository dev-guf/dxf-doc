import { DxfWriter } from "..";
import { Entity } from ".";
export declare class Block extends Entity {
    name: string;
    entities: Entity[];
    constructor(name: string, handle: string, ownerHandle: string);
    protected writeEntity(writer: DxfWriter): void;
}
export declare class BlockEnd extends Entity {
    constructor(handle: string, ownerHandle: string);
    protected writeEntity(writer: DxfWriter): void;
}
