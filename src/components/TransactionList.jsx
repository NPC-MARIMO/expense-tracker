
export default function TransactionList({transactions, deleteTransaction}) {
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction) => (
                    <li
                        key={transaction.id}
                        className={transaction.amount < 0 ? 'minus' : 'plus'}
                    >
                        {transaction.reason}{' '}
                        <span>
                            {transaction.amount < 0
                                ? `-$${Math.abs(transaction.amount)}`
                                : `+$${transaction.amount}`}
                        </span>
                        <button className="delete-btn"
                            onClick={() => {
                                deleteTransaction(transaction.id);
                                console.log(transaction.id);
                            }}  
                        >x</button>
                    </li>
                ))}
            </ul>
        </>
    );
}