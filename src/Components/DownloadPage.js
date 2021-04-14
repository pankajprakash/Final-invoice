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

   const previewInvoices = (e) => {
    
   const invoiceId =  e.target.id;
    dispatch(reviewInvoice(invoiceId));

   }
   
   
    return (
        <div>
            <button onClick={() => showAllInvoices()}>show All Invoices</button>
           
          
            

            <table id="customers">
               <tr>
                 <th>Invoice Status</th>
                 <th>From</th>
                 <th>Id</th>
                 <th>Operation</th>
               </tr>
               
            {state.allInvoices.allInvoices.map((e) => (
               
               <tr>
                 <td>{e.status}</td>
                 <td>{e.from.companyName}</td>
                 <td>{e._id}</td>
                 <td> <button onClick={(e) => previewInvoices(e)} id={e._id}>Download Invoice</button></td>
               </tr>
              
               
             
             
              
            ))}
            
            </table>
            {/* {
                state.previewInvoice.previewInvoice.map((e) => console.log(e) )

            } */}
            

        </div>
    )
}

export default DownloadPage
