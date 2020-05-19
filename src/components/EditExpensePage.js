import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expenses}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expenses.id, expense))
                    props.history.push('/')
                    // redirect to dashboard
                    console.log('updated', expense)
                }}
            />
            <button
                onClick={() => {
                    props.dispatch(removeExpense(props.expenses))
                    props.history.push('/')
                }}
            >
            Remove</button>    
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expenses: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage)