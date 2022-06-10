import React, { Component } from 'react'
import NavigationBar from './component/NavigationBar'
import { Divider, Image } from 'antd';
import Login from "./component/Login"
import "./App.css";

export default class ProjectOne extends Component {
  render() {
    return (
      <div style={{ margin: '10px', padding: '20px', border: "1px solid black", borderRadius: "5px", height: "600px", width: "1100px" }}>
        <NavigationBar />
        <Divider />
        <div style={{ display: 'flex', marginTop: "50px" }}>
          <div id="LoginPage" style={{ width: "50%", display: 'flex', justifyContent: 'center' }}>
            <Login />
          </div>
          <div id="Image" style={{ width: "50%" }}>
            <Image
              src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80s"
            />
          </div>
        </div>

      </div>
    )
  }
}