import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

const TransactionItem = ({trans}) => {
    const {deleteTransaction}=useContext(GlobalContext);
    return ( 
            <li className={trans.amount>0?"plus":"minus"}>{trans.text} <span>{trans.amount<0?"-":"+"}${Math.abs(trans.amount)}</span><button className="delete-btn" onClick={()=>deleteTransaction(trans.id)}>x</button></li>
     );
}
 
export default TransactionItem;