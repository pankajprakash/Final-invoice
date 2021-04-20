import axios from 'axios'

export const fetchUpdateRequest = () => {

  return {
    type: 'FETCH_UPDATE_REQUEST'
  }
}

export const fetchUpdateSuccess = invoices => {
  console.log(invoices)
  return {
    type: 'FETCH_UPDATE_SUCCESS',
    payload: invoices
  }
}

export const fetchUpdateFailure = error => {
  return {
    type: 'FETCH_UPDATE_FAILURE',
    payload: error
  }
}




export const updateData = (data) => {
  
    const token = localStorage.getItem('user_token')
    console.log(token,"token in updated")
    console.log(data,"updateInvoice---------------------")
    const id = data.id
    console.log("id in updated Invopioce",id)
  return (dispatch) => {
    dispatch(fetchUpdateRequest);


    const raw = JSON.stringify({
        "items": {
          "productName": "g-shock watch",
          "quantity": "2",
          "description": "fastest processing speed",
          "unitPrice": "20000",
          "total": "4000"
        },
        "dueDate": "2021-04-01"
      });
      
    const requestOptions = {
       
        headers: {"Authorization" : token},
        //body: raw,
        redirect: 'follow'
      };
    axios.put(`http://192.168.1.78:9000/invoice/${id}`,raw,requestOptions)    

      .then(response => {
       
        console.log(response,"========response from updatedinvoice")
        // dispatch(fetchCompanySuccess(response.data))
      })

      .catch(error => 
        {
        
          console.log('error===========', error.response);
        }
        
      )

  };
};
