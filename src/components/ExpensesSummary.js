import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import expensesTotal from '../selectors/expenses-total'

export class ExpensesSummary extends React.Component {
    render() {
        return (
            <div>
                {this.props.expenses.length} Expenses totalling: {
                    numeral(expensesTotal(this.props.expenses) / 100).format('$ 0,0.00')
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    expenses: state.expenses
})

export default connect(mapStateToProps)(ExpensesSummary)