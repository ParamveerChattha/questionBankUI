import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
};

export default class LevelBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleLevelChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleLevelChange}  style={styles.customWidth}>
          <MenuItem value={1} primaryText="Level 1" />
          <MenuItem value={2} primaryText="Level 2" />
          <MenuItem value={3} primaryText="Level 3" />
        </DropDownMenu>
        <br />
      </div>
    );
  }
}
