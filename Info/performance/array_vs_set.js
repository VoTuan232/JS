// Link ref: https://stackoverflow.com/questions/39007637/javascript-set-vs-array-performance
// Test: 10 000 element(small) and 100 000(big)
// Adding elements to a collection: array faster 4 timer than set
// Iterating over and modifying elements in a collection: array faster 2 timer(small) and 4 timer(big)
// Removing elements from a collection: array faster 3 timer(small), set faster 23 timer(big)

/*
100 000 element:
ARRAY:
Timer: Array Add finished in 55 ms
Timer: Array Change finished in 14 ms
Timer: Array Delete finished in 8968 ms
Timer: Array Full Action finished in 9069 ms
SET:
Timer: Set Add finished in 63 ms
Timer: Set Change finished in 25 ms
Timer: Set Delete finished in 23 ms
Timer: Set Full Action finished in 131 ms

10 000 element:
ARRAY:
Timer: Array Add finished in 17 ms
Timer: Array Change finished in 7 ms
Timer: Array Delete finished in 11 ms
Timer: Array Full Action finished in 58 ms
SET:
Timer: Set Add finished in 24 ms
Timer: Set Change finished in 5 ms
Timer: Set Delete finished in 5 ms
Timer: Set Full Action finished in 49 ms
*/

'use strict';

