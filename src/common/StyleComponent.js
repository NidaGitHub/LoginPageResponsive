import React, { Component } from 'react'
import { Input  , Button} from 'antd';

export default class StyledButton extends Component{
  render(){
    return(
      <div>
        <Button
        type={this.props.type}
        htmlType={this.props.htmlType}
        style={{ backgroundColor : this.props.BackgroundColor,
         color : "white" ,
          width : this.props.width , 
          height:"35px",
          margin: this.props.marginBtn }}
        onClick={this.props.buttonClick}
        >{this.props.buttonName} </Button>
      </div>
    )
  }
}

export class StyledInput extends Component{
  render(){
    return(
      <div>
        <Input
          onChange={this.props.textChange}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
}