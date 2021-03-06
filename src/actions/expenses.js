import { v1 as uuid } from 'uuid'
import db from '../firebase/firebase'

// export const addExpense = (
//     {
//         description = '',
//         note = '',
//         amount =  0,
//         createdAt = 0 
//     } = {}
// ) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// })

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    // this function works because we have middleware / redux-thunk
    // gets called with dispatch, so that dispatch may be called 
    // after whatever we want to happen hapens - save data on firebase.
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        // the following code destructures from expenseData
        // it is the same as setting defaults on the function arguments
        const {
            description = '',
            note = '',
            amount =  0,
            createdAt = 0 
        } = expenseData
        // to avoid destructuring in the arguments of 'push' call to firebase
        const expense = { description, note, amount, createdAt }

        return db.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}
 
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid 
        return db.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = ({ id }) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid 
        return db.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }))
        })
    }
}

//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

// export const startSetExpenses
export const startSetExpenses = () => {
    // this function works because we have middleware / redux-thunk
    // gets called with dispatch, so that dispatch may be called 
    // after whatever we want to happen hapens - save data on firebase.
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        // important to return, so that you can call then on the function calling startSetExpenses
        return db.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = []

            snapshot.forEach((child => {
                expenses.push({
                    id: child.key,
                    ...child.val()
                })
            }))
            dispatch(setExpenses(expenses))
        })
    }
}