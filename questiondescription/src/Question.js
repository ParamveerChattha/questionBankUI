import React from 'react';
import TextField from 'material-ui/TextField';

const Question = () => (
  <div>

  <TextField
        hintText="Enter the Question"
        multiLine={true}
        rows={1}
      /><br />
  </div>
);

export default Question;
