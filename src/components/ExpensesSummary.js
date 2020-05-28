import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import expensesTotal from '../selectors/expenses-total'
import filteredExpenses from '../selectors/expenses'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseNoun = expenseCount === 1 ? 'expense' : 'expenses'
    const formatedTotal = numeral(expensesTotal / 100).format('$ 0,0.00')
    return (
        <div>
            {expenseCount} {expenseNoun} totalling: {formatedTotal}
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = filteredExpenses(state.expenses, state.filters)

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)