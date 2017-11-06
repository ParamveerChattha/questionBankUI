import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import QuestionLayout from './QuestionLayout';
const styles = {
  customWidth: {
    width: 200
  },
};
class QuestionProperties extends React.Component {
constructor(props){
  super(props);
  this.state= {typeValue: 1,
              levelValue: 1,
              domainValue: 1,
              complexityValue: 1,
              mcq: false,
              tf : false}
  this.openLayout=this.openLayout.bind(this);
  }
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
        <DropDownMenu value={this.state.domainValue} onChange={this.handleDomainChange}  style={styles.customWidth}>
          <MenuItem value={1} primaryText="Java" />
          <MenuItem value={2} primaryText="Python" />
          <MenuItem value={3} primaryText="DB Conectivty requred" />
        </DropDownMenu>
        <br />
        <DropDownMenu value={this.state.typeValue} onChange={this.handleTypeChange}  style={styles.customWidth}>
          <MenuItem value={1} primaryText="MCQ" />
          <MenuItem value={2} primaryText="T/F" />

        </DropDownMenu>
        <br />
        <DropDownMenu value={this.state.complexityValue} onChange={this.handleComplexityChange}  style={styles.customWidth}>
          <MenuItem value={1} primaryText="Easy" />
          <MenuItem value={2} primaryText="Medium" />
          <MenuItem value={3} primaryText="Hard" />
        </DropDownMenu>
        <br />
        <DropDownMenu value={this.state.levelValue} onChange={this.handleLevelChange}  style={styles.customWidth}>
          <MenuItem value={1} primaryText="Level 1" />
          <MenuItem value={2} primaryText="Level 2" />
          <MenuItem value={3} primaryText="Level 3" />
        </DropDownMenu>
      <br />
        <RaisedButton
          label="Create"
          onClick={this.openLayout}
        />
        < QuestionLayout openmcq={(this.state.mcq)} opentf={(this.state.tf)} />
      </div>
    );
  }
  handleDomainChange = (event, index, domainValue) => this.setState({domainValue});
  handleTypeChange = (event, index, typeValue) => this.setState({typeValue});
  handleComplexityChange = (event, index, complexityValue) => this.setState({complexityValue});
  handleLevelChange = (event, index, levelValue) => this.setState({levelValue});

    openLayout(){
      
      if(this.state.typeValue === 1){
        this.setState({mcq: true});
        this.setState({tf: false});
      }
      else if(this.state.typeValue === 2){
        this.setState({mcq: false});
        this.setState({tf: true});
      }
      }
}
export default QuestionProperties;
