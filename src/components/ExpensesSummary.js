import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import expensesTotal from '../selectors/expenses-total'
import filteredExpenses from '../selectors/expenses'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseNoun = expenseCount === 1 ? 'expense' : 'expenses'
    const formatedTotal = numeral(expensesTotal / 100).format('$ 0,0.00')
    return (
        <div className='page-header'>
            <div className='content-container'>
            <h1 className='page-header__title'>Viewing <span>{expenseCount}</span> {expenseNoun} totalling: <span>{formatedTotal}</span></h1>
            <div className='page-header__actions'>
                <Link className='button' to='/create'>Add Expense</Link>
            </div>
            </div>
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