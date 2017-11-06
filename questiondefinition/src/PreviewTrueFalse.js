import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class PreviewTrueFalse extends React.Component{
  constructor(props){
    super(props)
    this.state={
                open:true
                }

  }
  render(){
    return(
    <Card open= {this.state.open}>
      <CardHeader
        title = "Question Preview"
      />
      <CardText expandable = {false}>

      </CardText>
    </Card>
);}
}

export default PreviewTrueFalse;
