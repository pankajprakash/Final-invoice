// import axios from 'axios'
// import { toast } from "react-toastify";
// import { getAllInvoices } from './allInvoiceAction';
// export const fetchInvoiceRequest = () => {

//   return {
//     type: 'FETCH_INVOICE_REQUEST'
//   }
// }

// export const fetchInvoiceSuccess = Invoice => {
//   console.log(Invoice)
//   return {
//     type: 'FETCH_INVOICE_SUCCESS',
//     payload: Invoice
//   }
// }

// export const fetchInvoiceFailure = error => {
//   return {
//     type: 'FETCH_INVOICE_FAILURE',
//     payload: error
//   }
// }


// const token = localStorage.getItem("user_token")

// export const postInvoiceData = (invoicedata,history) => {
//   console.log("invoice items", invoicedata)
//   const invoiceItem = {
//     "from": invoicedata.from,
//     "to": invoicedata.to,
//     "createdBy": invoicedata.createdBy,
//     "items": [{
//       "productName": invoicedata.ProductName,
//       "quantity": invoicedata.quantity,
//       "description": invoicedata.Description,
//       "unitPrice": invoicedata.unitPrice,
//       "total": invoicedata.total
//     }],
//     "dueDate": invoicedata.dueDate,
//     "status": invoicedata.status
//   }

//   console.log(token)
//   console.log("form Invoice ===>", invoiceItem)
//   return (dispatch) => {
//     dispatch(fetchInvoiceRequest);
    
//     axios.post("http://192.168.1.78:9000/invoice", invoiceItem, {
//       headers: {
//         'Authorization': token
//       }
//     })

//       .then((res) => {

//         (console.log(res,"res from post form ,while post req"))
        
        
//           if(res.status===200){

//             history.push("/download")
//             dispatch(fetchInvoiceSuccess())
//             dispatch(getAllInvoices())
//           }

         
          
      
        
//       })
//       .catch((error) => {
//         toast.error(error.response.data);
//         console.log("error", error);
//       });
//   };
// };

import axios from 'axios'
import { toast } from "react-toastify";
import { getAllInvoices } from './allInvoiceAction';
export const fetchInvoiceRequest = () => {
  return {
    type: 'FETCH_INVOICE_REQUEST'
  }
}
export const fetchInvoiceSuccess = Invoice => {
  console.log(Invoice)
  return {
    type: 'FETCH_INVOICE_SUCCESS',
    payload: Invoice
  }
}
export const fetchInvoiceFailure = error => {
  return {
    type: 'FETCH_INVOICE_FAILURE',
    payload: error
  }
}
export const postInvoiceData = (invoicedata,history) => {
  const token = localStorage.getItem("user_token")
  console.log("invoice itemssssss-----------", invoicedata)
  const invoiceItem = {
    "from": invoicedata[0].from,
    "to": invoicedata[0].to,
    "createdBy": invoicedata[0].createdBy,
    "items": {
      "productName": invoicedata[0].productName,
      "quantity": invoicedata[0].quantity,
      "description": invoicedata[0].Description,
      "unitPrice": invoicedata[0].unitPrice,
      "total": invoicedata[0].total
    },
    "dueDate": invoicedata[0].dueDate,
    "status": invoicedata[0].status
  }
  console.log(invoiceItem,"invove data????")
  console.log(token)
  console.log("from Invoice page to postInvoiceAction  ===>", invoiceItem)
  return (dispatch) => {
    dispatch(fetchInvoiceRequest);
    axios.post("http://192.168.1.78:9000/invoice", invoiceItem, {
      headers: {
        'Authorization': token
      }
    })
      .then((res) => {
        (console.log(res,"res from post form in formaction.js "))
          if(res.status===200){
            history.push("/download")
          }
          else{
            alert("something is wrong")
          }
      
          dispatch(fetchInvoiceSuccess());
          dispatch(getAllInvoices());
      })
      .catch((error) => {
        toast.error(error.response.data);
        console.log("error", error);
      });
  };
};
