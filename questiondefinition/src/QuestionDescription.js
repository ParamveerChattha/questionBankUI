import React from 'react';
import TextField from 'material-ui/TextField';
const styles = {
  customWidth: {
    width: 400,
  },
  padding:{
    paddingLeft:20,
  },

};
const QuestionDescription = () => (
  <div>
  <br />
  <br />
  <TextField
        hintText="Type your Question here"
        fullWidth={true}

      /><br />
  <TextField

          floatingLabelText="option 1"
          floatingLabelFixed={true}
          style={styles.padding}

  /><br /><br />
  <TextField

          floatingLabelText="option 2"
          floatingLabelFixed={true}
          style={styles.padding}
  /><br /> <br />
  <TextField

          floatingLabelText="option 3"
          floatingLabelFixed={true}
          style={styles.padding}
  /><br /><br />
  <TextField
          hintText=""
          floatingLabelText="option 4"
          floatingLabelFixed={true}
          style={styles.padding}
  /><br /><br />
  </div>
  );

export default QuestionDescription;
