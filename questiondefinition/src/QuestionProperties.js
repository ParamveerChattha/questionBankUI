import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import QuestionLayout from './QuestionLayout';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  customWidth: {
    width: 150
  },
  cardWidth :{
    margin: "left",
width: 689,
border: "1px solid yellow",
padding: 5
  },
  buttonAlign:{
    justifyContent: 'center',
     alignItems: 'center',
  },
};
class QuestionProperties extends React.Component {
constructor(props){
  super(props);
  this.state= {typeValue: 1,
              levelValue: 1,
              domainValue: 1,
              complexityValue: 1,
              topicValue: 1,
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
      <Card style={styles.cardWidth}>
        <CardHeader
          title="Enter the Question Details Below"
        />

        <CardText expandable={false}>

<form>    <p> Question of Java </p>
        <DropDownMenu value={this.state.domainValue} onChange={this.handleDomainChange}  style={styles.customWidth}>
          <MenuItem value={1} primaryText="Java" />
          <MenuItem value={2} primaryText="Python" />
          <MenuItem value={3} primaryText="DB Conectivty requred" />
        </DropDownMenu>
        from
        <DropDownMenu value={this.state.topicValue} onChange={this.handleTopicChange}  style={styles.customWidth}>
          <MenuItem value={1} primaryText="Strings" />
          <MenuItem value={2} primaryText="collections" />
        </DropDownMenu>
                  of type
        <DropDownMenu value={this.state.typeValue} onChange={this.handleTypeChange}  style={styles.customWidth}>
          <MenuItem value={1} primaryText="MCQ" />
          <MenuItem value={2} primaryText="T/F" />

        </DropDownMenu>
                  of complexity
        <DropDownMenu value={this.state.complexityValue} onChange={this.handleComplexityChange}  style={styles.customWidth}>
          <MenuItem value={1} primaryText="Easy" />
          <MenuItem value={2} primaryText="Medium" />
          <MenuItem value={3} primaryText="Hard" />
        </DropDownMenu>
        with level
        <DropDownMenu value={this.state.levelValue} onChange={this.handleLevelChange}  style={styles.customWidth}>
          <MenuItem value={1} primaryText="1" />
          <MenuItem value={2} primaryText="2" />
          <MenuItem value={3} primaryText="3" />
        </DropDownMenu>
      <div>
        <RaisedButton
          label = "Create"
          onClick = {this.openLayout}
          style = {styles.buttonAlign}
        />
        < QuestionLayout openMcq={this.state.mcq} openTf={this.state.tf} />
        </div>
        </form>
        </CardText>
      </Card>
      </div>
    );
  }


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
