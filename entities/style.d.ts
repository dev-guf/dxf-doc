import { TableRecord } from "./table";
import { DxfWriter } from "..";
export declare enum StyleFlags {
    NONE = 2,
    ITALIC = 16777216,
    BOLD = 33554432
}
export declare class Style extends TableRecord {
    name: string;
    font: string;
    ownerHandle: string;
    styleFlags: StyleFlags;
    verticalText: boolean;
    fixedHeight: boolean;
    widthFactor: number;
    obliqueAngle: number;
    backwardText: boolean;
    updownText: boolean;
    bigfont: string;
    static STANDARD: string;
    static FONT_DEFAULT: string;
    constructor(name: string, font: string, handle: string, ownerHandle: string, styleFlags?: StyleFlags, verticalText?: boolean, fixedHeight?: boolean, widthFactor?: number, obliqueAngle?: number, backwardText?: boolean, updownText?: boolean, bigfont?: string);
    protected writeTableRecord(writer: DxfWriter): void;
}
