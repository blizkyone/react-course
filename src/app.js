import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouters'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

import { addExpense, editExpense, removeExpense } from './actions/expenses'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()

store.dispatch(addExpense({ description: 'water bill', amount: 1800 }))
store.dispatch(addExpense({ description: 'beer bill', amount: 4200, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'rent', amount: 104200 }))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))