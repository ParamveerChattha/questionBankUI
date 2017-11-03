import React, { Component } from 'react';

import NavBar from './NavBar';
import DomainBox from './DomainBox';
import QuestionType from './QuestionType';
import ComplexityBox from './ComplexityBox';
import LevelBox from './LevelBox';
import CreateButton from './CreateButton';

class App extends Component {
  constructor(props){
    super(props);
    }
  render() {
    return (
      <div className="App">
      <header>
      <NavBar />
      </header>
      <br/>
      <h3>
      <p align="left" >  Enter the Question Details Below </p>
      </h3>
      <DomainBox/>
      <QuestionType />
       <ComplexityBox />
       <LevelBox />
       <CreateButton />
      </div>
    );
  }

}

export default App;
