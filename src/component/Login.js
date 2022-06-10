import React, { Component } from 'react'
import { Checkbox, Form, Input, Typography } from 'antd';
import StyledButton from '../common/StyleComponent';
import "../App.css";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            userData: ""
        }
    }
    onFinish = (values) => {
        console.log('Success:', values);
    };
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    handleEmail = (value) => {
        this.setState({
            email: value
        })
    }
    handlePassword = (value) => {
        this.setState({
            password: value
        })
    }
    submitForm = () => {
        if (this.state.password == "5cityslicka" && this.state.email == "eve.holt@reqres.in") {
            const parameters = {
                email: this.state.email,
                password: this.state.password
            };
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(parameters)
            };
            fetch("https://reqres.in/api/login", options)
                .then((response) => response.json())
                .then((json) => {
                    this.setState({
                        userData: json?.token
                    })
                    alert(json?.token)
                })
        }
        if (this.state.password == "" && this.state.email == "eve.holt@reqres.in") {
            alert("Missing Password")
        }
        if (this.state.password != "" && this.state.email != "" && (this.state.password != "5cityslicka" || this.state.email != "eve.holt@reqres.in")) {
            alert("Wrong Email or Password")
        }
    }
    render() {
        return (
            <div id="LoginPage" >
                <div >
                    <div id='LoginTop' style={{ textAlign: "center" }}>
                        <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>Welcome Back</Typography>
                        <Typography style={{ fontSize: "12px", color: "blue" }}>Sub-title text goes here </Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: "center", marginTop: "20px" }}>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input
                                    onChange={(e) => this.handleEmail(e.target.value)}
                                    placeholder='Email Address' style={{ width: "270px" }} type="email" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    onChange={(e) => this.handlePassword(e.target.value)}
                                    placeholder='Password' style={{ width: "270px" }} />
                            </Form.Item>

                            <Form.Item
                            >
                                <StyledButton
                                    buttonClick={() => this.submitForm()}
                                    buttonName="Login" type="primary" htmlType="submit" BackgroundColor='rgba(7, 22, 85, 0.8)' width="270px" />
                            </Form.Item>
                            <div >
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox id='forgot1'>Remember password</Checkbox>
                                </Form.Item>
                                <a style={{ marginLeft: "10px" }}

                                    href="">
                                    Forgot password?
                                </a>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
