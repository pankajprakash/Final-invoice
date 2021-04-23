import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Datepicker from './Datepicker';
import { Container, Row, Col } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from 'react-redux'
import { postInvoiceData } from './../Redux/Action/FormAction'
import { CompanyData } from './../Redux/Action/ToCompanies'
import { postLoginData } from "./../../src/Redux/Action/LoginAction";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Select from 'react-select';

import { productData } from './../Redux/Action/ProductAction'
import { getAllByText } from "@testing-library/dom";

const Form = ({ history, location }) => {



  const [state1, setstate1] = useState({
    "from": '',
    "to": '',
    "createdBy": '',
    "items": {
      "productName": '',
      "quantity": '',
      "description": '',
      "unitPrice": '',
      "total": ''
    },
    "dueDate": '',
    "status": ''
  })

  const [addMore, setAddmore] = useState({
    items: [
      {
        "productName": "",
        "quantity": "",
        "description": "",
        "unitPrice": "",
        "total": "",
      },
    ],
  });

  const addItems = (e) => {

    // setAddmore((prevState) => ({

    //   //here hName was newCon
    //   items: [
    //      ...prevState.items,
    //     {
    //       "productName":"",
    //     "quantity": "",
    //     "description": "",
    //     "unitPrice": "",
    //     "total": "",
    //     },
    //   ],
    // }));



    setAddmore({
      items: [
        {
          "productName": "",
          "quantity": "",
          "description": "",
          "unitPrice": "",
          "total": "",
        },
      ],
    })


  };





  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const { control, register, handleSubmit, formState: { errors } } = useForm();


  useEffect(() => {
    dispatch(CompanyData());
    // dispatch(postLoginData())
    dispatch(productData())
    console.log(location, "user reg data in form")
    console.log(selectedOrg, "sel org")
    console.log(selectedOrg, "gggggggggggggggggggggggggggggggggggggggggggggg")
    // console.log(selOrg,"local s data")
  }, [])
  // const onSubmit = (invoicedata) => dispatch(postInvoiceData


  //   (invoicedata));
  const getValues = (invoicedata) => {
    setstate1({
      "from": invoicedata.from,
      "to": invoicedata.to,
      "createdBy": invoicedata.createdBy,
      "items": {
        "productName": invoicedata.ProductName,
        "quantity": invoicedata.quantity,
        "description": invoicedata.Description,
        "unitPrice": invoicedata.unitPrice,
        "total": invoicedata.total
      },
      "dueDate": invoicedata.dueDate,
      "status": invoicedata.status
    })

    setTimeout(() => {

    }, 500);


  }


  const onSubmit = (invoicedata) => {
    
  // const alldata={...invoicedata,
  // productName:pro.map(e => e.label)}
  //   //  getValues(invoicedata)
  //   dispatch(postInvoiceData(alldata, history))
    console.log(invoicedata, "invouice data itemsss")


    // setTimeout(() => {

    //   history.push("/download")
    // }, 1000);
    // 
    // console.log(object)

    // console.log("dispatched data",state.companyId.to);

  }


  const logoutFun = () => {
    localStorage.clear();
    history.push("/");
  }

  // for organisation
  const selectedOrg = JSON.parse(localStorage.getItem("selected_company"))

  const [pro, setProducts] = useState([])
  const [tax, setTax] = useState({
    tax: '',
    category: ''
  })
  //used new use selector for for product data
  const productsData = useSelector(state => state.products.Product)

 



  
  const mappedProducts = productsData.map((e) =>

  ({
    label: e.productName,
    value: e.id,
    color: '#00B8D9',
    category:e.category,
    tax:e.tax
  })
  )
console.log(mappedProducts)


const allInvoice = () =>{
  history.push("/download")
}


const[total,setTotal] = useState({
  "quantity":'',
  "unitPrice":'',
  "total": ''

})

const setQuan = (e) => {
  setTotal({...total,
 [e.target.name]:e.target.value,
 
  })
  
}

const setTotalVal = () => {
  setTotal({
   
      'total': total.quantity * total.unitPrice
   
     
  })
}

  return (

    <>


 <div className="container-area">
        <div className="header">
          <div className="navbar">
            <div className="left-side">
            <i class="fas fa-user-alt"></i>
              <div className="all-invoice-btn">
                <button onClick={()=>allInvoice()} className="addnew-btn">Show Invoices</button>
              </div>
            </div>
            <div className="right-side">
              <div className="logout-btn">
              <button className="addnew-btn" onClick={logoutFun}><i class="far fa-plus-square"> logout </i></button>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Container>

        <div className="outer">

          {/* {JSON.stringify(productsData,"product-data")} */}
         

          <form onSubmit={handleSubmit(onSubmit)} className="form-data">


            <Row>
              <div className="btn-head1">
                <div>
                  <h5 className="top-head"><b >INVOICE MANAGEMENT</b></h5>
                  {/* {productsData.map((e) => (e.productName)

                  )} */}
                </div>

                <div className="log-btn">
                  <button className="addnew-btn" onClick={logoutFun}><i class="far fa-plus-square"> logout </i></button>
                </div>
              </div>
            </Row>



            <Row className="firstRow">
              <Col md="4">
                <label for="status">From</label>
                <select {...register("from")} className="select1">

                  {selectedOrg.map((e) => (
                    <option value={e.id}>{e.companyName}</option>
                  ))}


                </select>

              </Col>
              <Col md="4">
                <label for="Created By">Created By </label>
                <input
                  type="text"
                  {...register('createdBy', {
                    required: true
                  })}
                />

                <p className="para">
                  {errors.createdBy && "this field can't be empty*"}
                </p>
              </Col>
              <Col md="4">
                <label for="To">To</label>
                <select {...register("to", { required: true })} className="select">

                  {state.companyId.to.map((e) =>
                    <option value={e.id}>{e.name}</option>
                  )}

                </select>
                <p className="para">
                  {errors.to && "this field can't be empty*"}
                </p>


              </Col>
            </Row>

            <Row className="firstRow">
              <Col md="4">
                <label for="Notes">Notes</label>
                <input
                  type="text"
                  {...register('Notes', {

                  })}
                />
                <p className="para">
                  {errors.Notes && "this field can't be empty*"}
                </p>
              </Col>




              <Col md="4  ">
                <label for="dueDate">Due Date</label>
                {/* <Controller name="due_date" control={control} defaultValue={null}
                  render={
                    ({onChange, value})=><DatePicker   onChange={onChange} selected={value}
                    
                    placeholderText="select date" />

                  }
                  />  */}


                {<Controller name="dueDate" control={control} defaultValue={null}
                  render={
                    (p) => {
                      console.log(`onChange, value`, p.fields)
                      return <DatePicker selected={p.field.value}
                        placeholderText="select date   " onChange={p.field.onChange} className="date-picker" />

                    }

                  }
                />
                }


              </Col>

              <Col md="4">
                <label for="status">Status</label>
                <select {...register("status", { required: true })} className="select">
                  <option value="pending">Pending</option>
                  <option value="underReview">Under Review</option>
                  <option value="approved">Approved</option>
                </select>

                <p className="para">
                  {errors.status && "Password is required*"}
                </p>
              </Col>
            </Row>


            <Row className="firstRow">




            </Row>

            {/*mapping newly created data */}


            <Row className="first">

            {/* {JSON.stringify(pro,"tax vali state")} */}
              <Col md="4">

                <label for="product name">Product Name</label>

                {/* <select {...register("productName", { required: true })} className="select">
                  {productsData.map((e) =>
             
            
                    <option value={e.productName} onClick={(e) => getTax(e)}>{e.productName}</option>
                    )}
                  </select> */}
                <Controller
                  as={Select}
                  name="productName"
                  options={mappedProducts}
                  isMulti
                  control={control}
                  render={(p) => {
                    const { ref, onChange, value } = p.field
                    return (
                      <Select
                        inputRef={ref}
                        classNamePrefix="addl-class"
                        options={mappedProducts}                   
                        value={mappedProducts.find(e => (e.value === value))}
                        onChange={val => setProducts(val)}

                      />
                    )
                  }}
                />



                <p className="para">
                  {errors.to && "this field can't be empty*"}
                </p>
              </Col>

              <Col md="4">
            
              <label for="Quantity">Category</label>
              <input
                  type="text"
                  value={pro.category}
                  placeholder="Category"
                  disabled
                /> 
              </Col>

              <Col md="4">
              <label for="Quantity">Tax</label>
      

              <input
                  type="text"
                  value={pro.tax}
                  placeholder="Tax"
                  disabled
                /> 
              </Col>


              <Col md="4">
                {JSON.stringify(total)}
                <label for="Quantity">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={total.quantity}
                  {...register("quantity", {
                    required: true

                  })}
                  
                  onChange={setQuan}
                  placeholder="enter quantity"
                />
                <p className="para">
                  {errors.to && "this field can't be empty*"}
                </p>
              </Col>

              <Col md="4">
                <label for="description">Description</label>
                <input
                  type="text"
                  {...register('Description', {
                    required: true

                  })}
                />
                <p className="para">
                  {errors.to && "this field can't be empty*"}
                </p>
              </Col>

              <Col md="4">
                <label for="price">Price</label>
                <input
                  type="number"
                  name="unitPrice"
                  value={total.unitPrice}
                  
                  {...register('unitPrice', {
                    required: true

                  })}

                  onChange={(e) => { setQuan(e); setTimeout(() => {
                    setTotalVal();
                  }, 1000);} }
                 
                />
                <p className="para">
                  {errors.to && "this field can't be empty*"}
                </p>
              </Col>


              <Col md="4">
                <label for="Total">Total</label>
                <input
                  type="number"
                  {...register('total', {
                    required: true

                  })}
                  
                  value={total.total}
                  // onClick={}
                  
                />
                <p className="para">
                  {errors.to && "this field can't be empty*"}
                </p>
              </Col>

            




            </Row>












            <Row className="firstRow">
              <Col className="button-column"  >
                <button className="addnew-btn" onClick={() => addItems()}><i class="far fa-plus-square"> Add More </i></button>
              </Col>

            </Row>



            <Row className="firstRow">
              <Col className="button-column"  >
                <button className="submit-btn" >SUBMIT</button>
              </Col>

            </Row>

          </form>
        </div>
      </Container>

    </>
  )
}

export default Form

