import './App.css';
import React from 'react';
import Card from './components/Card'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false
    }
  }
  opened = () => {
    this.setState({
      open:!this.state.open
    })
  }
  render() {
    return (
      <div className="App">
        <button id="btn" onClick={()=>{this.opened()}} >Please Open Your Gift</button>
        { this.state.open && <Card opened={ this.state.open}/>}
      </div>
    );
  }
}

export default App;
 