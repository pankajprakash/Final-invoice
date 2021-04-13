import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";


import { Container, Row, Col } from 'reactstrap';
import { Back, InputFirst, InputS } from "./LoginStyle";
import { postLoginData } from './../../Redux/Action/LoginAction'


const Login = ({ history }) => {
    const state = useSelector(state => state.state)
    const dispatch = useDispatch()
    const { control, register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (logindata) => dispatch(postLoginData(logindata, history))


    const validateUser = () => {
        if (localStorage.getItem('user_token')) {
            history.push('/form')
        }
        else {
            alert("please check Your email/password")
        }

    }


const signup=()=>{
    history.push('/')
}


    return (

        <>
            <Container>
                <Back>
                    <form onSubmit={handleSubmit(onSubmit)} className="form-data">
                        <h5 className="top-head">
                            <ul className="options">
                                <li className="list-one" onClick={signup}>Sign Up</li>
                                <li className="list-second">Sign In</li>

                            </ul>
                        </h5>
                        <Row>
                            <Col md="5">
                                <Row className="first">
                                    <Col md="12">



                                        <label for="Email">Email</label>
                                        <InputFirst placeholder="KeyMouseit" className="first-login-input"
                                            type="email"
                                            {...register('email', {
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
                                    <Col md="12">
                                        <label for="password">Password</label>



                                        <InputS placeholder="Password"
                                            type="password"
                                            {...register('password', {
                                                required: true,
                                                min: 8
                                            })}
                                        />


                                    </Col>
                                </Row>




                                <Row>
                                    <Col>

                                        <button className="btn-sub" >
                                            <div className="outer-icon">
                                                <img className="arrow-image"


                                                    src={
                                                        require("./../../Images/next_arrow@3x.png")
                                                            .default
                                                    }
                                                    alt="Header Img"
                                                    srcset=""
                                                ></img>
                                            </div>
                                        </button>
                                    </Col>
                                </Row>







                            </Col>

                            <Col md="7">


                                <img
                                    src={
                                        require("/home/keymouseit/Documents/original Project/invoicemanagement/src/Images/login_character.png")
                                            .default
                                    }
                                    alt="Header Img"
                                    srcset=""
                                ></img>
                            </Col>
                        </Row>






                    </form>
                </Back>

            </Container>

        </>
    )
}

export default Login