import React,{Component} from 'react';

class Test extends Component {

  constructor(props){
    super(props);
    this.state= {msg: 'Message written in Test'}
  }
  render(){
    return(
      <div className = "body">
        <p className = "body-description">
          this is the content
        </p>
        <button type = "submit" onClick = {this.props.handle}>BodyButton </button>
        <h3>{this.props.msg}</h3>
      </div>
    );
  }
}
export default Test;
