export default ( filteredExpenses = [] ) => (
    filteredExpenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0)
)