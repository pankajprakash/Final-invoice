const initialState = {
    loading: false,
    userInfo: {},
    token:'',
    error:'',
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_LOGIN_REQUEST' :
            return {
                ...state,
                loading:true
            }
        case 'FETCH_LOGIN_SUCCESS' :
            return {
                loading:false,
                token:action.payload,
                error:''
            }  

            case 'FETCH_LOGIN_FAILURE' :
                return {
                    loading:false,
                    error:''
                }  
            default:
                return state
            }
            }
export default loginReducer;