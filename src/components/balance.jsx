import React from 'react'

export default function Balance({transactions}) {

  let balance = 0;
  transactions.forEach((transaction)=>{
    balance += transaction.amount    
  })

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>

    </>
  )
}
