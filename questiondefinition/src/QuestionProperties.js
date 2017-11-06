import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import LevelBox from './LevelBox';
import CreateButton from './CreateButton';
const styles = {
  customWidth: {
    width: 200,
  },
};
class QuestionProperties extends Component {
constructor(props){
  super(props);
  this.state= {domainValue: 1,
              complexityValue: 1,
              typeValue: 1,
              levelValue: 1}
  this.handleDomainChange = this.handleDomainChange.bind(this);
  this.handleTypeChange = this.handleTypeChange.bind(this);
  this.handleComplexityChange = this.handleComplexityChange.bind(this);
  this.handleLevelChange = this.handleLevelChange.bind(this);
  }
handleDomainChange = (event, index, value) => this.setState({domainValue});
handleTypeChange = (event, index, value) => this.setState({typeValue});
handleComplexityChange = (event, index, value) => this.setState({complexityValue});
handleLevelChange = (event, index, value) => this.setState({levelValue});

  render() {
    return (
      <div className="QuestionProperties">
      <header>
      <AppBar
        title="Question Blueprints"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      </header>
      <br/>
      <h3>
      <p align="left" >  Enter the Question Details Below </p>
      </h3>
      <DropDownMenu domainValue={this.state.domainValue} onChange={this.handleDomainChange}  style={styles.customWidth}>
        <MenuItem domainValue={1} primaryText="Java" />
        <MenuItem domainValue={2} primaryText="Python" />
        <MenuItem domainValue={3} primaryText="DB Conectivty requred" />
      </DropDownMenu>
      <br />
      <DropDownMenu typeValue={this.state.typeValue} onChange={this.handleTypeChange}  style={styles.customWidth}>
        <MenuItem typeValue={1} primaryText="MCQ" />
        <MenuItem typeValue={2} primaryText="T/F" />
      </DropDownMenu>
      <br />
      <DropDownMenu value={this.state.complexityValue} onChange={this.handleComplexityChange}  style={styles.customWidth}>
        <MenuItem complexityValue={1} primaryText="Easy" />
        <MenuItem complexityValue={2} primaryText="Medium" />
        <MenuItem complexityValue={3} primaryText="Hard" />
      </DropDownMenu>
      <br />
      <DropDownMenu value={this.state.levelValue} onChange={this.handleLevelChange}  style={styles.customWidth}>
        <MenuItem levelValue={1} primaryText="Level 1" />
        <MenuItem levelValue={2} primaryText="Level 2" />
        <MenuItem levelValue={3} primaryText="Level 3" />
      </DropDownMenu>
      <br />
       <CreateButton />
      </div>
    );
  }
}

export default QuestionProperties;
