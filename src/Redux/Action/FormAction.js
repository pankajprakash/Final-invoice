import axios from 'axios'
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




export const postInvoiceData = (Invoice) => {
  console.log("invoice items", Invoice)
  const token = localStorage.getItem("user_token")
  console.log(token)
  // console.log("form Invoice ===>", Invoice)
  return (dispatch) => {
    dispatch(fetchInvoiceRequest);
    axios.post("http://192.168.1.78:9000/invoice",Invoice,{
      headers: {
        'Authorization': token
      }})

      .then(response => console.log(response,"res of invoice data"))

      .catch(error => console.log('error', error));

  };
};

