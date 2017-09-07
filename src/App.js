import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      names: []
    }
    axios.get('https://enigmatic-spire-64643.herokuapp.com/api/tareas')
      .then(response=>{
        /*console.log(response.data.data)*/
        this.setState({
          names: response.data.data
        })
      
      })
      .catch(error=>{
        console.log(error);
      })
  }
  render() {
    return (
      <div className="App">
      <p>hi world</p>
        <ul>
          {this.state.names.map(name =>
            <li key={name}>{name.titulo}</li>
          )}
        </ul>
     
        <p>hi</p>
      </div>
    );
  }
}

export default App;
