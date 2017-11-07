import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import McqQuestion from './McqQuestion';
import TFQuestion from './TFQuestion';
import PreviewTrueFalse from './PreviewTrueFalse';
const style = {
  margin: 12,
};
export default class QuestionLayout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {mcq: false,
                  tf: false,
                  preview: false,
                  status: false}
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.openPreview = this.openPreview.bind(this);
  }
  render() {
    return (
      <div>
        <Drawer width={1439} openSecondary={true} open={this.state.mcq} >
          <AppBar title="MCQ Question" />
          < McqQuestion />
            <RaisedButton label="cancel" default={true} style={style} onClick = {this.toggleDrawer }/>
            <RaisedButton label="preview" secondary={true} style={style} />
            <RaisedButton label="save" primary={true} style={style} />
        </Drawer>
        <Drawer width={1439} openSecondary={true} open={this.state.tf} >
          <AppBar title="True or False Question" />
          < TFQuestion />
            <RaisedButton label="cancel" default={true} style={style} onClick = {this.toggleDrawer }/>
            <RaisedButton label="preview" secondary={true} style={style} onClick={this.openPreview}/>
            <RaisedButton label="save" primary={true} style={style} />
            <PreviewTrueFalse open = {this.state.preview} />
        </Drawer>

      </div>
    );
  }

  componentWillReceiveProps(newProps){
    this.setState({mcq: newProps.openMcq});
    this.setState({tf: newProps.openTf});
  }
  toggleDrawer(){
    this.setState({mcq: false});
    this.setState({tf: false});
  }
  openPreview(){
    this.setState({preview: true});
  }
}
