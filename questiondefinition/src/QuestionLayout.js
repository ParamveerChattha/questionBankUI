import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import QuestionDescription from './QuestionDescription';
const style = {
  margin: 12,
};
export default class QuestionLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false}
    this.toggleDrawer = this.toggleDrawer.bind(this);

  }
  render() {
    return (
      <div>
        <Drawer width={750} openSecondary={true} open={this.state.open} >
          <AppBar title="Enter the Question" />
          < QuestionDescription/>
            <RaisedButton label="cancel" default={true} style={style} onClick = {this.toggleDrawer }/>
            <RaisedButton label="Preview" secondary={true} style={style} />
            <RaisedButton label="Save" primary={true} style={style} />
        </Drawer>
      </div>
    );
  }
  componentWillReceiveProps(newProps){
    this.setState({open: newProps.open});
  }
  toggleDrawer(){
    this.setState({open: false})
  }
}
