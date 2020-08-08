export default (state,action)=>{
    switch(action.type){

        case 'ADD_TRANSACTION':
            const trans={
                id:(state.transactions.length+1),
                ...action.payload}
            return {
                ...state,
                transactions:[
                    ...state.transactions,
                    trans
                ]
            };

        case 'REMOVE_TRANSACTION':
            return {
                ...state,
                transactions:state.transactions.filter(item=>item.id!==action.payload)
            };

        default:
            return state;
    }
}