import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashbardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashbardPage