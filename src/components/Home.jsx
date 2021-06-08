import { useEffect, useState } from "react";
import { getAllFinances } from "../services/api";
import { Link } from 'react-router-dom'

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllFinances();
      console.log(res)
      setData(res)
    };
    fetchData();
  }, []);
  
  const expenses = data.filter(item => item.fields.type === "expenses")
  console.log(expenses)
  const expensesTotal = expenses.reduce((acc, curr) => acc + curr.fields.amount, 0);

  const incomes = data.filter(item => item.fields.type === "incomes")
  console.log(incomes)
  const incomesTotal = incomes.reduce((acc, curr) => acc + curr.fields.amount, 0);

  const budget = data.filter(item => item.fields.type === "budget")
  console.log(budget)
  const budgetTotal = budget.reduce((acc, curr) => acc + curr.fields.amount, 0);

  const savings = data.filter(item => item.fields.type === "savings")
  console.log(savings)
  const savingsTotal = savings.reduce((acc, curr) => acc + curr.fields.amount, 0);

  return <div>
    {expensesTotal}
    {incomesTotal}
    {budgetTotal}
    {savingsTotal}
    {data.map(item => {
      return <div key={item.id}>
        <Link to={`/data/${item.id}`}>{item.fields.title}</Link>
        </div>
    })}
  </div>;
}