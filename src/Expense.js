import React, { useState } from 'react';
import './App.css'; 

const Expense = ({ setTotalExpense }) => {
const [expense, setExpense] = useState(0);

const handleAddExpense = () => {
    setTotalExpense(totalExpense => totalExpense + parseInt(expense));
    setExpense(0);
};

return (
    <div className="expense">
    <h2 className="title">Expenses</h2>
    <input className="input" type="number" value={expense} onChange={a => setExpense(a.target.value)} />
    <button className="button" onClick={handleAddExpense}>Add Expense</button>
    </div>
);
};

export default Expense;