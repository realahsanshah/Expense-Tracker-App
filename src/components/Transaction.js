import React,{useState} from 'react'

const Transaction = () => {
    const [text,setText]=useState("");
    const [amount,setAmount]=useState(0);

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
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
     );
}
 
export default Transaction;