import './App.css';
import { Route, Switch } from 'react-router-dom'

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SavingsList from "./components/SavingsList";
import IncomesList from "./components/IncomesList";
import ExpensesList from "./components/ExpensesList";
import BudgetList from "./components/BudgetList";

function App() {
  return (
    <div className="App">
      <NavBar />     
      <Switch>
        <Route exact path="/new">
          <div>New</div>
        </Route>
        <Route exact path="/incomes">
          <IncomesList />
        </Route>
        
        <Route exact path="/expenses">
          <ExpensesList />
        </Route>
        <Route exact path="/budget">
          <BudgetList />
        </Route>
        <Route exact path="/savings">
          <SavingsList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;