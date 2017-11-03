import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export default class CreateButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Create"
          onClick={this.handleToggle}
        />
        <Drawer width={800} openSecondary={true} open={this.state.open} >
          <AppBar title="Enter the Question" />
        </Drawer>
      </div>
    );
  }
}
