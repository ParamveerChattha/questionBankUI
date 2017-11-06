import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import QuestionLayout from './QuestionLayout';
import QuestionType from './QuestionType';
export default class CreateButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {McqOpen: false,
                  TFOpen: false};
    this.openLayout=this.openLayout.bind(this);
  }
  render() {
    return (
      <div>
        <RaisedButton
          label="Create"
          onClick={this.openLayout}
        />
        < QuestionLayout open={this.state.McqOpen} />
/*//        component for true falsee */
        </div>
    );
  }

  openLayout(){
    this.setState({McqOpen:true});
  }
}
