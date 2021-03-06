const expensesDefaultState = []

const expensesReducer = ( state = expensesDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
            // DON'T use state.push - it modifies 'state' directly. CAN use state.concat, as it returns a new array
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        case 'SET_EXPENSES':
            return action.expenses
        default:
            return state
    }
}
 
export default expensesReducer