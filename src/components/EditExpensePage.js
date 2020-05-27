import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(editExpense(props.expenses.id, expense))
        this.props.editExpense(this.props.expenses.id, expense)
        this.props.history.push('/')
    }

    removeExpense = () => {
        // props.dispatch(removeExpense(props.expenses))
        this.props.removeExpense(this.props.expenses)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
            <ExpenseForm
                expense={this.props.expenses}
                onSubmit={this.onSubmit}
            />
            <button
                onClick={this.removeExpense}
            >
            Remove</button>    
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
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (expenses) => dispatch(removeExpense(expenses))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)