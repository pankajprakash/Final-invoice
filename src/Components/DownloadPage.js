import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'

import  { getAllInvoices }  from './../Redux/Action/allInvoiceAction'

import { reviewInvoice } from './../Redux/Action/previewInvoiceAction'

const DownloadPage = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
  

    
   const showAllInvoices = () => {

    dispatch(getAllInvoices());
       console.log(state,"all invoice statwe")
   }

   const previewInvoices = () => {
    
    dispatch(reviewInvoice());

   }
   
   
    return (
        <div>
            <button onClick={() => showAllInvoices()}>show All Invoices</button>
            <button onClick={() => previewInvoices()}>Preview Invoice</button>
            <button >Download Current Invoice</button>
            <ul>
            {state.allInvoices.allInvoices.map((e) => (
               <div>
                 <li> <b>Status : </b> {e.status}</li> <label> <b>Company Name :</b> {e.from.companyName}</label> 
                
                   </div>
              
            ))}
            </ul>
            {/* {
                state.previewInvoice.previewInvoice.map((e) => console.log(e) )

            } */}
            

        </div>
    )
}

export default DownloadPage
