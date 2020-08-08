import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';


const Transaction = () => {
    const [text,setText]=useState("");
    const [amount,setAmount]=useState();
    const {addTransaction}=useContext(GlobalContext);

    const handleSubmit=(text,amount)=>{
        if(text==="")
            return;
        if(amount===0||amount==="")
            return;
        addTransaction(text,Number(amount));
        setText("");
        setAmount("");
    }
    return ( 
        <div>
            <h3>Add new Transaction</h3>
            <form>
                <div className="form-control">
                    <label for='text'>Text</label>
                    <input onChange={(e)=>setText(e.target.value)} type='text' className='form-control' name='text' placeholder='Detail' value={text}/>
                </div>
                <div className="form-control">
                    <label for='amount'>Amount<br/>(negative - expense, positive - income)</label>
                    <input onChange={(e)=>setAmount(e.target.value)} type='number' className='form-control' name='amount' placeholder='Amount' value={amount}/>
                </div>
                <button className='btn' onClick={(e)=>{e.preventDefault();handleSubmit(text,amount);}}>Add Transaction</button>
            </form>
        </div>
     );
}
 
export default Transaction;