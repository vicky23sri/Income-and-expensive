import React, { useState } from 'react';
import Income from './Income';
import Expense from './Expense';
import './App.css'; 

const App = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  return (
    <div className="container"> 
      <h1 className="title1">Income and Expenses</h1> 
      <Income setTotalIncome={setTotalIncome} />
      <Expense setTotalExpense={setTotalExpense} />
      <p className="balance">Total Balance: {totalIncome - totalExpense}</p> {/* Add a balance class */}
    </div>
  );
};

export default App;