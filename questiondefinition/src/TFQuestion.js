import React from 'react';
import TextField from 'material-ui/TextField';

const TFQuestion = () => (

  <div>
      <TextField
        hintText="Enter the Question"
        errorText=""
      /><br />
  <TextField
    hintText="True or False"
    errorText=""
    floatingLabelText="Either True, r False?"
    multiLine={true}
    rows={1}
  /><br />
  </div>
)
export default TFQuestion;
