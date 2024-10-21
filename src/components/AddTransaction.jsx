import { useState } from 'react';

export default function AddTransaction({ addTransaction }) {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const addItem = (e) => {
        e.preventDefault();
        const newItem = { reason: text, amount: parseFloat(amount), id: count };
        addTransaction(newItem);
        setCount(count + 1);
        setText('');
        setAmount(0);
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={addItem}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..."
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        negative - expense, positive - income
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <button className="btn" type="submit">
                    Add transaction
                </button>
            </form>
        </>
    );
}