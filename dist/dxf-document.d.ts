import { LType, Layer, Style, Block, Entity } from "./entities";
import { HeaderVariable } from "./entities/header-variables";
import { StyleFlags } from "./entities/style";
export declare class DxfDocument {
    private _nextHandle;
    private header;
    private classes;
    private tables;
    private blocks;
    private entities;
    private objects;
    private layerTable;
    private blockRecTable;
    private ltypeTable;
    private styleTable;
    constructor();
    addHeaderVariables(...variables: HeaderVariable[]): void;
    addLayer(name: string): Layer;
    addLineType(name: string, dashes?: number[]): LType;
    addStyle(name: string, font?: string, flags?: StyleFlags): Style;
    addBlock(name: string): Block;
    addEntity(entity: Entity): void;
    addEntities(...entities: Entity[]): void;
    nextHandle(): string;
    dxf(): string;
    extents(min: [number, number], max: [number, number]): void;
    limits(min: [number, number], max: [number, number]): void;
}
