import React, { useState } from 'react'

export default function IncomeExpenses({ transactions }) {


  const amounts = transactions.map(transaction => transaction.amount);
  let income = 0;
  let expense = 0;

  amounts.map((amt) => {
    amt>0?income += Math.abs(amt) :expense += Math.abs(amt);
  })

  return (

    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>


  )
}
