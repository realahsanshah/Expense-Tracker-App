import React,{useReducer} from 'react';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import Transaction from './components/Transaction';
import Reducer from './reducers/Reducer';

function App() {
  const state=useReducer(Reducer);
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <History />
        <Transaction />
      </div>
    </div>
  );
}

export default App;
