export interface DxfWriter {
    writeGroup(code: number, value: number | string): void;
}
export declare class DxfTextWriter implements DxfWriter {
    text: string;
    private writeLine;
    writeGroup(code: number, value: number | string): void;
}
