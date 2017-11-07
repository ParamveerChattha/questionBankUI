import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class PreviewTrueFalse extends React.Component{
  constructor(props){
    super(props)
    this.state={
                open: true
                }
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  render(){
    return(
      <div>
        <Drawer width={1439} open={this.state.open}>
      <p> </p>
    <Card initiallyExpanded="true">
      <CardHeader
        title = "Question Preview"
      />
      <CardText expandable = {false}>
      </CardText>
      <RaisedButton
        label="close"
        onClick={this.toggleDrawer}
      />
    </Card>
    </Drawer>
    </div>
);}
toggleDrawer(){
  this.setState({open: false});
}
componentWillReceiveProps(newProps){
  this.setState({open : newProps.open});
}
}

export default PreviewTrueFalse;
