const initialState = {
    loading: false,
    Product:[],
   
    error:'',
}

export const ProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_PRODUCT_REQUEST' :
            return {
                ...state,
                loading:true
            }
        case 'FETCH_PRODUCT_SUCCESS' :
            return {
                loading:false,
                Product:action.payload,
                error:''
            }  

            case 'FETCH_PRODUCT_FAILURE' :
                return {
                    loading:false,
                    error:''
                }  
            default:
                return state
            }
            }
export default ProductReducer;