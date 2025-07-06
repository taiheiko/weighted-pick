# A library to pick random elements with weighted probability

## Algorithm Visualization
![WeightedPick](images/WeightedPick.png)
[WeightedPick](https://excalidraw.com/#json=hczDy_8u7ExWAiGBatb-m,SQOPRyDmEpgzYqxRIIMqFQ)

## Usage

### TypeScript
```typescript
import {WeightedPick} from 'weighted-pick';

const picker = new WeightedPick([
    {value: 0, weight: 1},
    {value: 1, weight: 1},
]);

const values = picker.pickValues(5);
```

### JavaScript
```javascript
import {WeightedValue, WeightedPick} from 'weighted-pick';

const picker = new WeightedPick([
    new WeightedValue(0, 1),
    new WeightedValue(1, 1),
]);

const values = picker.pickValues(5);
```

## Based on
- [Leetcode - 528. Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/description/)
