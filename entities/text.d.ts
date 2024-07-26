import { Entity } from ".";
import { DxfWriter, DxfDocument } from "..";
export declare enum TextAlign {
    LEFT = 0,
    CENTER = 1,
    RIGHT = 2,
    ALIGNED = 3,
    MIDDLE = 4,
    FIT = 5
}
export declare enum TextVerticalAlign {
    BASELINE = 0,
    BOTTOM = 1,
    MIDDLE = 2,
    TOP = 3
}
export declare class Text extends Entity {
    text: string;
    height: number;
    widthFactor: number;
    alignPoint: [number, number];
    align?: TextAlign | undefined;
    secondAlignPoint?: [number, number] | undefined;
    valign?: TextVerticalAlign | undefined;
    rotation?: number | undefined;
    style?: string;
    constructor(doc: DxfDocument, text: string, height: number, widthFactor: number, alignPoint: [number, number], align?: TextAlign | undefined, secondAlignPoint?: [number, number] | undefined, valign?: TextVerticalAlign | undefined, rotation?: number | undefined, ownerHandle?: string);
    protected writeEntity(writer: DxfWriter): void;
}
