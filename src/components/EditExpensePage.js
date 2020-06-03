import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(editExpense(props.expenses.id, expense))
        this.props.startEditExpense(this.props.expenses.id, expense)
        this.props.history.push('/')
    }

    removeExpense = () => {
        // props.dispatch(removeExpense(props.expenses))
        this.props.startRemoveExpense(this.props.expenses)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='page-header'>
            <div className='content-container'>
                <h1 className='page-header__title'>Edit Expense</h1>
            </div>
            <div className='content-container'>
                <ExpenseForm
                    expense={this.props.expenses}
                    onSubmit={this.onSubmit}
                />
                <button
                    className='button button--secondary'
                    onClick={this.removeExpense}
                >
                Remove</button>    
            </div>
            </div>
        )
    }
}

// const EditExpensePage = (props) => {
//     return (
//         <div>
//             <ExpenseForm
//                 expense={props.expenses}
//                 onSubmit={(expense) => {
//                     // props.dispatch(editExpense(props.expenses.id, expense))
//                     props.editExpense(props.expenses.id, expense)
//                     props.history.push('/')
//                     // redirect to dashboard
//                     console.log('updated', expense)
//                 }}
//             />
//             <button
//                 onClick={() => {
//                     // props.dispatch(removeExpense(props.expenses))
//                     props.removeExpense(props.expenses)
//                     props.history.push('/')
//                 }}
//             >
//             Remove</button>    
//         </div>
//     )
// } 

const mapStateToProps = (state, props) => ({
        expenses: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (expenses) => dispatch(startRemoveExpense(expenses))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)