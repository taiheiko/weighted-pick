class WeightedValue {

    constructor(value, weight) {
        this.value = value;
        this.weight = weight;
    }

}

class WeightedPick {
    #weights;
    #ranges;

    constructor(weights) {
        // TODO: Check for empty input data.
        this.#weights = weights;

        // [[start1, end1), [start2, end2), ...]
        const totalWeight = weights.reduce((acc, w) => acc + w.weight, 0);

        this.#ranges = [];
        let runningSum = 0;
        for (const {weight} of weights) {
            runningSum += weight;
            this.#ranges.push(runningSum / totalWeight);
        }
    }

    pickValue() {
        const rnd = Math.random();
        let lo = 0;
        let hi = this.#ranges.length - 1;

        // Binary Search
        while (lo <= hi) {
            const mid = Math.floor((hi - lo) / 2) + lo;
            if (rnd < this.#ranges[mid]) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        return this.#weights[lo].value;
    }

    pickValues(n) {
        const values = [];
        for (let i = 0; i < n; i++) {
            values.push(this.pickValue());
        }
        return values;
    }
}

module.exports = {
    WeightedValue,
    WeightedPick,
}