import React from 'react'


const TransactionItem = ({trans}) => {
    
    return ( 
            <li className={trans.amount>0?"plus":"minus"}>{trans.text} <span>{trans.amount<0?"-":"+"}${Math.abs(trans.amount)}</span><button className="delete-btn">x</button></li>
     );
}
 
export default TransactionItem;