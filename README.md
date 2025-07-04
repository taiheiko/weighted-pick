# A library to pick random elements with weighted probability

## Algorithm Visualization
![WeightedPick](images/WeightedPick.png)
[WeightedPick](https://excalidraw.com/#json=hczDy_8u7ExWAiGBatb-m,SQOPRyDmEpgzYqxRIIMqFQ)

## Usage

```javascript
const { WeightedValue, WeightedPick } = require('weighted-pick');

const picker = new WeightedPick([
    new WeightedValue(0, 1),
    new WeightedValue(1, 1)
]);

const n = 1000;
const values = picker.pickValues(n);
```

## Based on
- [Leetcode - 528. Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/description/)
