import { combineReducers } from 'redux'
import InvoiceReducer from '../Reducer/FormReducer';
import loginReducer from '../Reducer/LoginReducer';
import { apiReducer } from './../Reducer/Reducer';
import { companyReducer } from './../Reducer/CompanyReducer'
import { ToReducer } from '../Reducer/ToCompanyReducer';


export const rootReducer = combineReducers({
   Data: apiReducer,
   Login: loginReducer,
   Invoice: InvoiceReducer,
   company: companyReducer,
   companyId: ToReducer

})

export default rootReducer;