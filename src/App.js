import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
      </div>
    </div>
  );
}

export default App;
