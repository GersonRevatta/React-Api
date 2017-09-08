import React, { Component } from 'react';
import axios from 'axios';
import Detalle from './TareaDetalle.js'
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom'

class App extends Component {
  constructor(){
    super();
    this.state = {
      names: []
    }
    axios.get('https://enigmatic-spire-64643.herokuapp.com/api/tareas')
      .then(response=>{
        /*console.log(response.data.data.titulo);*/
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
            <li >{name.id}  {name.titulo}</li>
          )}
        </ul>
      <p>
        <Detalle></Detalle>
      </p>
        <p>hi</p>
        <Router>
            <div>
              <h2>Accounts</h2>
              <ul>
                {this.state.names.map(name =>
                <li ><Link to={name.titulo}>{name.titulo}</Link></li>)}                
              </ul>

              <Route path="/:id" component={Child}/>
            </div>
      </Router>
      </div>
    );
  }
}

const Child = ({ match }) => (

  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

export default App;
