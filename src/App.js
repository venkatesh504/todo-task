import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";  
import  CreateTodo  from "./components/create-todo.component";
import Home from "./components/home.component";
class App extends Component {
  render() {
    return (
      <Router>
 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={lo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a> */}
            <Link to="/" className="navbar-brand">React ToDo</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                {/* <li className="navbar-item">
                  <Link to="/todo" className="nav-link">Todos</Link>
                </li> */}
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              
              </ul>
            </div>
          </nav>
          <div className="container-fluid ">
          <Route path="/create" component={CreateTodo} />
          <Route path="/" exact component={Home} />
          {/* <Route path="/todo" exact component={TodosList} /> */}

      
        </div>
      </Router>
    );
  }
}

export default App;