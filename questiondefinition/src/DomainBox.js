import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
};

export default class DomainBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}  style={styles.customWidth}>
          <MenuItem value={1} primaryText="Java" />
          <MenuItem value={2} primaryText="Python" />
          <MenuItem value={3} primaryText="DB Conectivty requred" />
        </DropDownMenu>
        <br />
      </div>
    );
  }
}
