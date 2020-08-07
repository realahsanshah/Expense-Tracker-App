import React from 'react'

const Transaction = () => {
    return ( 
        <div>
            <h3>Add new Transaction</h3>
            <form>
                <div className="form-control">
                    <label for='text'>Text</label>
                    <input type='text' className='form-control' name='text' placeholder='Detail'/>
                </div>
                <div className="form-control">
                    <label for='amount'>Amount<br/>(negative - expense, positive - income)</label>
                    <input type='number' className='form-control' name='amount' placeholder='Amount'/>
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
     );
}
 
export default Transaction;