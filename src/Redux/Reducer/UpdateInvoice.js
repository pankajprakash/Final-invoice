const initialState = {
    loading: false,
    UpdatedInvoice: {},
   
    error:'',
}

export const InvoiceUpdateReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_UPDATE_REQUEST' :
            return {
                ...state,
                loading:true
            }
        case 'FETCH_UPDATE_SUCCESS' :
            return {
                loading:false,
                token:action.payload,
                error:''
            }  

            case 'FETCH_UPDATE_FAILURE' :
                return {
                    loading:false,
                    error:''
                }  
            default:
                return state
            }
            }
export default InvoiceUpdateReducer;