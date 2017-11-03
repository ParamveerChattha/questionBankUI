import React, { Component } from 'react';
import Question from './Question';
import QuestionDrawer from './QuestionDrawer';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className = "App" >
      <Question />
      <QuestionDrawer />
      </div>
    );
  }
}

export default App;
