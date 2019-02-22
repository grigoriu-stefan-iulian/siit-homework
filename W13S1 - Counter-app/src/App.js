import React, { Component } from 'react';
import Header from './components/Header'
import DateNow from './components/DateNow'
import Counter from './components/Counter'
import Button from './components/Button'
import './App.css';

class App extends Component {
  state = {
    clicked: 0
  }
  handleClick = () => {
    this.setState(() => ({
      clicked: this.state.clicked + 1
    }))
  }
  render() {
    return (
      <div className="App">
        <Header />
        <DateNow />
        <Counter
          clicked={this.state.clicked} 
          />
        <Button handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App;
