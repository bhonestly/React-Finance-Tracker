import './App.css';
import { Route, Switch } from 'react-router-dom'
import {useEffect, useState} from 'react'

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SavingsList from "./components/SavingsList";
import IncomesList from "./components/IncomesList";
import ExpensesList from "./components/ExpensesList";
import BudgetList from "./components/BudgetList";
import { getAllFinances } from "./services/api";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllFinances();
      console.log(res)
      setData(res)
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar />     
        <Route exact path="/new">
          <div>New</div>
        </Route>
        <Route exact path="/incomes">
          <IncomesList data={data}/>
        </Route>
        <Route exact path="/expenses">
          <ExpensesList data={data}/>
        </Route>
        <Route exact path="/budget">
          <BudgetList data={data}/>
        </Route>
        <Route exact path="/savings">
          <SavingsList data={data}/>
        </Route>
        <Route exact path="/">
          <Home data={data}/>
        </Route>
      <Footer />
    </div>
  );
}

export default App;