import  { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Balance from './components/balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

export default function App() {
    const [transactions, setTransactions] = useState([]);
    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const deleteTransaction = (id) => {
        // setTransactions(transactions.filter((transaction) => transaction.id !== id));
        setTransactions(transactions.splice(id, 1));
    };

    return (
        <div>
            <Header />
            <div className="container">
                <Balance transactions={transactions}  />
                <IncomeExpenses transactions={transactions} deleteTransactions = {deleteTransaction} />
                <TransactionList transactions={transactions} />
                <AddTransaction addTransaction={addTransaction} />
            </div>
        </div>
    );
}