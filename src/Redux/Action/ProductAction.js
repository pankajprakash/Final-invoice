import axios from "axios";


export const fetchProductRequest = () => {
  return {
    type: "FETCH_PRODUCT_REQUEST",
  };
};

export const fetchProductSuccess = (data) => {
  console.log(data);
  return {
    type: "FETCH_PRODUCT_SUCCESS",
    payload: data,
  };
};

export const fetchProductFailure = (error) => {
  return {
    type: "FETCH_PRODUCT_FAILURE",
    payload: error,
  };
};

export const productData = () => {
//   console.log("form data ===>", data);
  


  return (dispatch) => {
    dispatch(fetchProductRequest);
    axios.get("http://192.168.1.78:9000/allProduct",{
        headers : {
            Authorization : localStorage.getItem("user_token")
        }
    })

      .then((response) => {
        console.log(response, "response in all products page............")
       
        const productData = response.data
        dispatch(fetchProductSuccess(productData))

    


         
            })
       

       
            
        }}