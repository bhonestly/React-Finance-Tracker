export default function Home({data}) {
  
  const expenses = data.filter(item => item.fields.type === "expenses")
  console.log(expenses)
  const expensesTotal = expenses.reduce((accumulator, current) => accumulator + current.fields.amount, 0);

  const incomes = data.filter(item => item.fields.type === "incomes")
  console.log(incomes)
  const incomesTotal = incomes.reduce((accumulator, current) => accumulator + current.fields.amount, 0);

  const budget = data.filter(item => item.fields.type === "budget")
  console.log(budget)
  const budgetTotal = budget.reduce((accumulator, current) => accumulator + current.fields.amount, 0);

  const savings = data.filter(item => item.fields.type === "savings")
  console.log(savings)
  const savingsTotal = savings.reduce((accumulator, current) => accumulator + current.fields.amount, 0);

  return <div id="totals">
    <div className="total-line">
      Expenses Total: {expensesTotal}
    </div>
    <div className="total-line">
    {incomesTotal}
    </div>
    <div className="total-line">
    {budgetTotal}
    </div>
    <div className="total-line">
    {savingsTotal}
    </div>
  </div>;
}