import { combineReducers } from 'redux'
import InvoiceReducer from '../Reducer/FormReducer';
import loginReducer from '../Reducer/LoginReducer';
import {apiReducer} from './../Reducer/Reducer';
import {companyReducer} from './../Reducer/CompanyReducer'
import {ToReducer} from '../Reducer/ToCompanyReducer';
import {allInvoiceReducer} from './../Reducer/allInvoiceReducer';
import { previewInvoiceReducer }from './../Reducer/previewInvoiceReducer';
import{InvoiceUpdateReducer} from './../Reducer/UpdateInvoice'
import ProductReducer from '../Reducer/ProductReducer';


export const rootReducer = combineReducers({
   Data : apiReducer,
   Login:loginReducer,
   Invoice:InvoiceReducer,
   company:companyReducer,
   companyId:ToReducer,
   allInvoices: allInvoiceReducer,
   previewInvoice:previewInvoiceReducer,
   updateInvoice:InvoiceUpdateReducer,
   products:ProductReducer

})

export default rootReducer;