/* Initial State of the tally app */
const tallyState = { count: 0 };

/* Action objects for modifying the tally state: */
// Increments the count
const addTally = { type: 'ADD' };
// Decrements the count
const subtractTally = { type: 'SUBTRACT' };
// Resets the count to its initial value
const resetTally = { type: 'RESET' };

