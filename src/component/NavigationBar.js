import React, { Component } from 'react'
import { Layout, Typography } from 'antd';
import "antd/dist/antd.css";
import StyledButton from '../common/StyleComponent';
import "../App.css";

const { Header } = Layout

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Layout>
          <div >
            <Header className="header"
              style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }} >
              <Typography id='Header'
                strong style={{  color: 'rgba(7, 22, 85, 0.8)', fontSize: '30px', fontWeight: "bold" }}> ATools <span style={{ color: "red" }}>.</span> </Typography>
              <div id="navButton" >
                <div style={{ display: 'flex' }}>
                  <StyledButton
                    marginBtn="5px"
                    BackgroundColor="rgba(7, 22, 85, 0.8)"
                    buttonName="Start Free Trail"
                  />
                  <StyledButton
                    marginBtn="5px"
                    BackgroundColor="orange"
                    buttonName="Login"
                  />
                </div>
              </div>
            </Header>
          </div>
        </Layout>
      </div>
    )
  }
}