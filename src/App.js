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
      <Router>
        <div>
          <ul>
          {this.state.names.map(name =>
            <li><Link to={name.titulo} > {name.titulo}</Link></li>)}
            <li><Link to="/one">Show all</Link></li>
          </ul>
          <Route path="/:id" component={Child}/>
          <Route path="/one" render={() => (
                  <div>
                    {this.state.names.map(name =>
                    <h5> Titulo: {name.titulo} <br/> {name.descripcion}</h5>
                    )}
                </div> 
                  ) } />
        </div>
      </Router>

      </div>
    );
  }
}

const Child = ({ match }) => (

  <div>
    <h3>Tarea: {match.params.id}</h3>
  </div>
)

export default App;
