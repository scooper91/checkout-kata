# Checkout Kata

Simple kata to get the overall cost of a basket given items.

## Requirements

 - Docker

## Testing

### `make test`

This will run a node container, which will install the node mosules and run the tests

### `make watch`

This will run a node container, which will install the node mosules and will run the tests every time a file is saved

## Kata Instructions

You should implement a supermarket checkout which:
- always accepts a string of items and gives back the total price
- discounts any offers from the total price

Use the following pricing information:

| Item  | Price | Offer     |
| :---: | :---: | :---:     |
| A     | 50    | 3 for 130 |
| B     | 30    | 2 for 45  |
| C     | 20    | N/A       |
| D     | 15    | N/A       |

For example:
- `'DABA'` gives `145`
- `'BBBB'` gives `90`
