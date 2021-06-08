import { useEffect, useState } from "react";
import { getAllFinances } from "../services/api";
import { Link } from 'react-router-dom'

export default function Home() {
  const [data, setData] = useState([]);
  // const [expensesTotal, setExpensesTotal] = useState(0);
  // const [incomesTotal, setIncomesTotal] = useState(0);

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
      // expenses.forEach(expense => setExpensesTotal((prevexpense) => prevexpense + expense.fields.amount))
  const expensesTotal = expenses.reduce((acc, curr) => acc + curr.fields.amount, 0);

  // const incomes = data.reduce(item => item.fields.type === "incomes")
  // incomes.forEach(income => setIncomesTotal(incomesTotal + income.fields.amount))


  // const reduceData = item.reduce((currentTotal, item) => {
  //   console.log(reduceData)
  //   return item.amount + currentTotal
  // }, 0)

  return <div>
    {expensesTotal}
    {data.map(item => {
      return <div key={item.id}>
        <Link to={`/data/${item.id}`}>{item.fields.title}</Link>
        </div>
    })}
  </div>;
}