export default (state,action)=>{
    switch(action.type){

        case 'ADD_TRANSACTION':
            return state;

        case 'REMOVE_TRANSACTION':
            return {
                ...state,
                transactions:state.transactions.filter(item=>item.id!==action.payload)
            };

        default:
            return state;
    }
}