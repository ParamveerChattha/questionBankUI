import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import McqQuestion from './McqQuestion';
import TFQuestion from './TFQuestion';
const style = {
  margin: 12,
};
export default class QuestionLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {McqOpen: false,
                  TFOpen: false}
    this.toggleDrawer = this.toggleDrawer.bind(this);

  }
  render() {
    return (
      <div>
        <Drawer width={750} openSecondary={true} open={this.state.McqOpen} >
          <AppBar title="MCQ Question" />
          < McqQuestion />
            <RaisedButton label="cancel" default={true} style={style} onClick = {this.toggleDrawer }/>
            <RaisedButton label="Preview" secondary={true} style={style} />
            <RaisedButton label="Save" primary={true} style={style} />
        </Drawer>
        <Drawer width={750} openSecondary={true} open={this.state.TFOpen} >
          <AppBar title="True or False Question" />
          < TFQuestion />
            <RaisedButton label="cancel" default={true} style={style} onClick = {this.toggleDrawer }/>
            <RaisedButton label="Preview" secondary={true} style={style} />
            <RaisedButton label="Save" primary={true} style={style} />
        </Drawer>
      </div>
    );
  }
  componentWillReceiveProps(newProps){
    this.setState({McqOpen: newProps.open});
    this.setState({TFOpen: newProps.open});
  }
  toggleDrawer(){
    this.setState({McqOpen: false})
    this.setState({TFOpen: false})
  }
}
