import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Datepicker from "./Datepicker";
import { Container, Row, Col } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { postInvoiceData } from "./../Redux/Action/FormAction";
import { CompanyData } from "./../Redux/Action/ToCompanies";
import { postLoginData } from "./../../src/Redux/Action/LoginAction";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Select from "react-select";

import { productData } from "./../Redux/Action/ProductAction";
import { getAllByText } from "@testing-library/dom";


const Form = ({ history, location }) => {
  const [state1, setstate1] = useState({
    from: "",
    to: "",
    createdBy: "",
    items: {
      productName: "",
      quantity: "",
      description: "",
      unitPrice: "",
      total: "",
    },
    dueDate: "",
    status: "",
  });

  const [addMore, setAddmore] = useState({
    items: [
      {
        productName: "",
        quantity: "",
        description: "",
        unitPrice: "",
        total: "",
      },
    ],
  });


  const [isEmpty, setIsEmpty] = useState(0);

  const addItems = (e) => {
    e.preventDefault();
    setIsEmpty(isEmpty + 1)
    const values = [...addMore.items];

    values.push({

      productName: null,
      quantity: null,
      description: null,
      unitPrice: null,
      total: null,

    })





    console.log(values, "values in addItems button")

    setAddmore({ items: [...values] })

    console.log(addMore, "add more state")


  };

  const deleteItem = (e, index) => {
console.log(e,"e in deleted")
    console.log(index,"deletre btn index")
    setIsEmpty(isEmpty - 1)
    console.log(index, "index issssssssssssssssssssssssssssss");
    const values = [...addMore.items];
    console.log(values, "we are che");
    values.splice(index, 1);
    console.log(values, "cut val");
    setAddmore({
      items: values,
    });
 console.log(pro,"state --------------->")
 pro.splice(index,1);
  };

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(CompanyData());

    dispatch(productData());
    console.log(location, "user reg data in form");
    console.log(selectedOrg, "sel org");

    // console.log(selOrg,"local s data")
  }, []);
  // const onSubmit = (invoicedata) => dispatch(postInvoiceData

  //   (invoicedata));

  const onSubmit = (invoicedata) => {

    console.log(invoicedata, "invoice*************")
    console.log(pro, "productsss*******************")
  
    const emptyArr = []

    for (let i = 0; i < pro.length; i++) {
        emptyArr.push({
          productName: pro[i].label,
          quantity: pro[i].quantity,
          unitPrice: pro[i].price,
          total: total.total
        })

    }

    console.log(emptyArr,"array of obj")


      const data = [{
        ...invoicedata,
        items: emptyArr

       
      }]
console.log(pro,"productsssssssss")
      console.log(data, "final data----------------------")
      dispatch(postInvoiceData(data, history))
    






   
  }



  const logoutFun = () => {
    alert("are you sure you want to log out")
    localStorage.clear();
    history.push("/");
  };

  // for organisation
  const selectedOrg = JSON.parse(localStorage.getItem("selected_company"));

  const [pro, setProducts] = useState([]);
  const [tax, setTax] = useState({
    tax: "",
    category: "",
  });


  //used new use selector for for product data
  const productsData = useSelector((state) => state.products.Product);

  const mappedProducts = productsData.map((e) => ({
    label: e.productName,
    value: e.id,
    color: "#00B8D9",
    category: e.category,
    tax: e.tax,
  }));


  // console.log(mappedProducts);

  const allInvoice = () => {
    history.push("/download");
  };

  const [total, setTotal] = useState({
    total: "",
  })


  useEffect(() => {
    setTotal({
      ...total, total: pro.reduce((sum, item) => {
        const { tax, quantity, price } = item;
        if (tax && quantity && price) {
          const total = quantity * price;
          const totalTax = 0.01 * tax * total;
          return sum + total + totalTax
        }
        return sum;
      }, 0)
    })
  }, [pro])







  return (
    <>
      <div className="container-area">
        <div className="header">
          <div className="navbar">
            <div className="left-side">
              <i class="fas fa-user-alt"></i>
              <div className="all-invoice-btn">
                <button onClick={() => allInvoice()} className="addnew-btn">
                  Show Invoices
                </button>
              </div>
            </div>
            <div className="right-side">
              <div className="logout-btn">
                <button className="addnew-btn" onClick={logoutFun}>
                  <i class="far fa-plus-square"> logout </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="outer">


          <form onSubmit={e => {
            e.preventDefault();
            console.log({ errors })
            handleSubmit(onSubmit)(e)
          }} className="form-data" >
            <Row>
              <div className="btn-head1">
                <div>
                  <h5 className="top-head">
                    <b>INVOICE MANAGEMENT</b>
                  </h5>
                  {/* {productsData.map((e) => (e.productName)

                  )} */}
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
                  {...register("createdBy", {
                    required: true,
                  })}
                />

                <p className="para">
                  {errors.createdBy && "this field can't be empty*"}
                </p>
              </Col>
              <Col md="4">
                <label for="To">To</label>
                <select
                  {...register("to", { required: true })}
                  className="select"
                >
                  {state.companyId.to.map((e) => (
                    <option value={e.id}>{e.name}</option>
                  ))}
                </select>
                <p className="para">
                  {errors.to && "this field can't be empty*"}
                </p>
              </Col>
            </Row>

            <Row className="first">
              <Col md="4">
                <label for="Notes">Notes</label>
                <input type="text" {...register("Notes", {})} />
                <p className="para">
                  {errors.Notes && "this field can't be empty*"}
                </p>
              </Col>

              <Col md="4  ">
                <label for="dueDate">Due Date</label>
                {
                  <Controller
                    name="dueDate"
                    control={control}
                    defaultValue={null}
                    render={(p) => {
                      console.log(`onChange, value`, p.field);
                      return (
                        <DatePicker
                          selected={p.field.value}
                          placeholderText="select date"
                          onChange={p.field.onChange}
                      
                          className="date-picker"
                        />
                      );
                    }}
                  />
                }
              </Col>

              <Col md="4">
                <label for="status">Status</label>
                <select
                  {...register("status", { required: true })}
                  className="select"
                >
                  <option value="pending">Pending</option>
                  <option value="underReview">Under Review</option>
                  <option value="approved">Approved</option>
                </select>

                <p className="para">
                  {errors.status && "Password is required*"}
                </p>
              </Col>
            </Row>
            <Row className="first"></Row>

            {/*mapping newly created data */}


            {addMore.items.map((e, index) => (
              <Row className="first">
                {/* {JSON.stringify(pro,"tax vali state")} */}
                <Col md="2">
                  <label for="productName">Product Name</label>


                  <Controller
                    as={Select}
                    name="productName"
                    options={mappedProducts}
                    isMulti
                    control={control}
                    render={(p) => {
                      const { ref, onChange, value } = p.field;
                      return (
                        <Select
                          inputRef={ref}
                          classNamePrefix="addl-class"
                          options={mappedProducts}
                          value={mappedProducts.find((e) => e.value === value)}
                          onChange={(val) => setProducts(oldVal => {
                            let newVal = [...oldVal]
                            if (!newVal[index]) {
                              newVal[index] = {};
                            }
                            newVal[index] = val;
                            return newVal
                          })}
                        />
                      );
                    }}
                  />

                  <p className="para">
                    {errors.to && "this field can't be empty*"}
                  </p>
                </Col>

                <Col md="2">
                  <label for="category">Category</label>
                  <input
                    type="text"
                    value={pro && pro[index]?.category}
                    placeholder="Category"
                    disabled
                  />
                </Col>

                <Col md="2">
                  <label for="tax">Tax</label>

                  <input
                    type="text"
                    value={pro && pro[index]?.tax}
                    placeholder="Tax"
                    disabled
                  />
                </Col>

                <Col md="2">
                  {/* {JSON.stringify(total)} */}
                  <label for="Quantity">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    value={pro && pro[index]?.quantity}
                    // {...register("quantity", {
                    //   required: true,
                    // })}
                    onChange={(e) => setProducts(oldVal => {
                      let newVal = [...oldVal]
                      if (!newVal[index]) {
                        newVal[index] = {};
                      }
                      newVal[index].quantity = parseInt(e.target.value) || "";
                      return newVal
                    })}
                    placeholder="enter quantity"
                  />
                  <p className="para">
                    {errors.to && "this field can't be empty*"}
                  </p>
                </Col>



                <Col md="2">
                  <label for="price">Price</label>
                  <input
                    type="number"
                    name="unitPrice"
                    value={pro[index]?.price}
                    onChange={(e) => setProducts(oldVal => {
                      let newVal = [...oldVal]
                      if (!newVal[index]) {
                        newVal[index] = {};
                      }
                      newVal[index].price = parseInt(e.target.value) || "";
                      return newVal
                    })}
                  />
                  <p className="para">
                    {errors.to && "this field can't be empty*"}
                  </p>


                </Col>
                <Col md="1">
                  <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <button className="addnew" onClick={(e) => addItems(e)}>
                      <i class="far fa-plus-square">  </i>


                    </button>
                    {isEmpty === 0 ? "" : <button className="subnew" onClick={() => deleteItem(e,index)}  > <i class="far fa-minus-square" >  </i></button>}
                  </div>

                </Col>
              </Row>
            ))}

            <Row>
              <Col md="4">
                <label for="Total">Total</label>
                {/* {
                  JSON.stringify(pro)
                } */}
                <input
                  type="number"
                  // {...register("total", {
                  //   required: true,
                  // })}
                  value={total.total}
                  disabled
                />
                <p className="para">
                  {errors.to && "this field can't be empty*"}
                </p>
              </Col>
            </Row>


            <Row className="firstRow">
              <Col className="button-column">
                <button type='submit' className="submit-btn">SUBMIT</button>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Form;
