import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

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
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getAllFinances();
    console.log(res)
    setData(res)
  };

  const reload = () => {
    fetchData();
  }

  return (
    <div className="App">
      <div className="app-title">
        <Link to="/">
          <h1>
            Finance Finatics
          </h1>
        </Link>
      </div>
      <NavBar />
      <Switch>
        <Route exact path="/new">
          <div>New</div>
        </Route>
        <Route exact path="/incomes">
          <IncomesList data={data} reload={reload} />
        </Route>
        <Route exact path="/expenses">
          <ExpensesList data={data} reload={reload} />
        </Route>
        <Route exact path="/budget">
          <BudgetList data={data} reload={reload} />
        </Route>
        <Route exact path="/savings">
          <SavingsList data={data} reload={reload} />
        </Route>
        <Route exact path="/">
          <Home data={data} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;