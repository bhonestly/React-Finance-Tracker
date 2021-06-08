import { useEffect, useState } from "react";
import { getAllFinances } from "../services/api";
import { Link } from 'react-router-dom'

export default function Home() {
  const [data, setData] = useState([]);
  const [expensesTotal, setExpensesTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllFinances();
      console.log(res)
      setData(res)
    };
    fetchData();
  }, []);
  
  const expenses = data.filter(item => item.fields.type === "expenses")
      expenses.forEach(expense => setExpensesTotal(expensesTotal + expense.fields.amount))

  return <div>
    {expensesTotal}
    {data.map(item => {
      return <div key={item.id}>
        <Link to={`/data/${item.id}`}>{item.fields.title}</Link>
        </div>
    })}
  </div>;
}