import React,{useState,useEffect} from "react";
import { useForm, Controller } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Back, InputFirst, InputS } from "./UserRegistrationStyle";
import { postData } from "./../../Redux/Action/Action";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {CompanyData} from './../../Redux/Action/ToCompanies'
// import history from './../UserRegistration/UserRegistration'

const UserRegistration = ({ history }) => {
    const notify = () => toast.success("Success");

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data, "=============data");
        dispatch(postData(data, history));
    };

    const signup = () => {
        console.log("signup");
    };

    const signin = () => {
        console.log("signin");
        history.push('./login')
    };

    const watchFields = watch(["firstName"]);
    console.log(history)



  useEffect(() => {
    dispatch(CompanyData());
    
  }, [])

    return (
        <>
            <Container>
                <Back>
                    <form onSubmit={handleSubmit(onSubmit)} className="form-data">
                        <h5 className="top-head">
                            <div className="hover-effect">
                                <ul className="options">
                                    <li className="list1" onClick={signup}>
                                        <b>Sign Up</b>
                  </li>
                                    <li className="list1" onClick={signin}>
                                       <b>Sign In</b> 
                  </li>
                                </ul>
                            </div>
                        </h5>
                        <Row>
                            <Col md="5">
                                <Row className="first_input">
                                    <Col md="6">
                                        <label for="first_name">First Name</label>

                                        <InputFirst
                                            placeholder="First name"
                                            autoComplete="off"
                                            type="text"
                                            {...register("firstName", {
                                                required: true,
                                            })}
                                        />
                                        <p className="para">
                                            {errors.firstName && "First name is required*"}
                                        </p>
                                    </Col>

                                    <Col md="6">
                                        <label for="Last Name">Last Name</label>

                                        <InputS
                                            placeholder="Last Name"
                                            autoComplete="off"
                                            type="text"
                                            {...register("lastName")}
                                        />
                                        {/* <p className="para">
                      {errors.lastName && "Last name is required"}
                    </p> */}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="12">
                                        <label for="Cotact">Contact</label>

                                        <InputS
                                            placeholder="KeyMouseit"
                                            autoComplete="off"
                                            type="text"
                                            {...register("mobile", { required: true })}
                                        />
                                        <p className="para">
                                            {errors.mobile && "Phone number is required*"}
                                        </p>
                                    </Col>

                                    {/* <Col md="6">
                                        <label for="email">Email</label>



                                        <InputS placeholder="KeyMouseit"
                                            type="text"
                                            {...register('company name', {
                                                required: true,
                                                max: 3
                                            })}
                                        />


                                    </Col> */}
                                </Row>

                                <Row>
                                    <Col md="12">
                                        <label for="Email">Email</label>

                                        <InputS
                                        placeholder="abc@example.com"
                                            type="text"
                                            autoComplete="off"
                                            {...register("email", {
                                                required: true,
                                            })}
                                        />
                                        <p className="para">
                                            {" "}
                                            {errors.email && "Email is required*"}
                                        </p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="6">
                                        <label for="Password">Password</label>

                                        <InputS
                                        placeholder="password"
                                            type="password"
                                            autoComplete="off"
                                            {...register("password", {
                                                required: true,
                                            })}
                                        />
                                        <p className="para">
                                            {" "}
                                            {errors.password && "Password is required*"}
                                        </p>
                                    </Col>

                                    <Col md="6">
                                        <label for="ConfirmPassword">Confirm password</label>

                                        <InputS
                                            placeholder="confirm password"
                                            type="password"
                                            autoComplete="off"
                                            {...register("confirmPassword", {
                                                required: true,
                                            })}
                                        />
                                        <p className="para">
                                            {errors.password && "Password is required*"}
                                        </p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="12">
                                        <label for="Cotact">Address</label>

                                        <InputS
                                            placeholder="KeyMouseit"
                                            autoComplete="off"
                                            type="text"
                                            {...register("address", {
                                                required: true,
                                                max: 3,
                                            })}
                                        />
                                        <p className="para">
                                            {errors.address && "Please provide a valid Address*"}
                                        </p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="12">
                                        <label for="status">Organization</label>
                                        <select {...register("organization")} className="select">
                
                {state.companyId.to.map((e) => 
                 <option value={e.id}>{e.name}</option>
                 )}
                 
               </select>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <InputS
                                            type="checkbox"
                                            autoComplete="off"
                                            className="checkbox-para"
                                            {...register("checkbox", {
                                                required: true,
                                                max: 3,
                                            })}
                                        />

                                        <label for="checkbox" className="checkbox-para">
                                            I've Read agree with Terms of service and our privacy
                                            policy
                    </label>
                                        <p className="para">
                                            {errors.checkbox && " You must agree before submitting."}
                                        </p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <button className="btn-sub">
                                            <div className="outer-icon">
                                                <img
                                                    className="arrow-image"
                                                    src={
                                                        require("./../../Images/next_arrow@3x.png").default
                                                    }
                                                    alt="Header Img"
                                                ></img>
                                            </div>
                                        </button>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md="7">
                                <img
                                    src={require("../../Images/login_character.png").default}
                                    alt="Header Img"
                                ></img>
                            </Col>
                        </Row>
                    </form>
                </Back>
            </Container>
            <ToastContainer />
        </>
    );
};

export default UserRegistration;
