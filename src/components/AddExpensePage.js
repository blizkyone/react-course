import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // following changes possible because of mapDispatchToProps
        // props.dispatch(addExpense(expense))
        this.props.addExpense(expense)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
                onSubmit={this.onSubmit}
            />
            </div>
        )
    }
}

// Removed stateless func component to comply with testing requirements
// const AddExpensePage = (props) => (
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm 
//             onSubmit={(expense) => {
//                 // following changes possible because of mapDispatchToProps
//                 // props.dispatch(addExpense(expense))
//                 props.addExpense(expense)
//                 props.history.push('/')
//             }}
//         />
//     </div>
// )

// Added for testing purposes
const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
})

// connect arguments added for testing purposes
export default connect(undefined, mapDispatchToProps)(AddExpensePage)