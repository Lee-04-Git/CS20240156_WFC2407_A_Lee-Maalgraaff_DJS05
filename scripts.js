/* Initial State of the tally app */
const tallyState = { count: 0 };

/* Action objects for modifying the tally state: */
// Increments the count
const addTally = { type: 'ADD' };
// Decrements the count
const subtractTally = { type: 'SUBTRACT' };
// Resets the count to its initial value
const resetTally = { type: 'RESET' };

/* Reducer function to manage the state of the tally app */
const tallyReducer  = (state = tallyState, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, count: state.count + 1 };
        case 'SUBTRACT':
            return { ...state, count: state.count - 1 };
        case 'RESET':
            return { ...state, count: 0 };
        default:
            return state;
    }
};

/* Initialize the Redux store for managing the tally app state */
const tallyStore = Redux.createStore(tallyReducer);

/* Subscribe to the store and log the updated state whenever it changes */
tallyStore.subscribe(() => {
    console.log(tallyStore.getState());
});

/* Dispatch actions to modify the state */
tallyStore.dispatch(addTally);
tallyStore.dispatch(subtractTally);
tallyStore.dispatch(resetTally);   