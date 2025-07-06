export type WeightedValue<T> = {
    value: T;
    weight: number;
}

export class WeightedPick<T> {
    constructor(weights: WeightedValue<T>[]);
    pickValue(): T;
    pickValues(n: number): T[];
}
