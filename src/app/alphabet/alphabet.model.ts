export class Alphabet {
    key: string;
    type: number;
    char: string;
    ref: LanRef;
}

export interface LanRef {
    type: number;
    value: string;
}
