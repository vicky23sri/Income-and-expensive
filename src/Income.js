import React, { useState } from 'react';
import './App.css'

const Income = ({ setTotalIncome }) => {
const [income, setIncome] = useState(0);
//income-->current value
//setIncome-->update the state (function)

const handleAddIncome = () => {
    setTotalIncome(totalIncome => totalIncome + parseInt(income));
    setIncome(0);
};

return (
    <div className="income">
    <h2 className="title">Income</h2>
    <input className="input" type="number" value={income} onChange={a => setIncome(a.target.value)} />
    <button className="button" onClick={handleAddIncome}>Add Income</button>
    </div>
);
};

export default Income;