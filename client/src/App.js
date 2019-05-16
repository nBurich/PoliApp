import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.module.css'
import Home from './pages/Login'
import About from './pages/About'
import Products from './pages/Products'
import Modal from './components/Modal'
import Error from './pages/Error'
import { subscribeToTimer } from './api';

class App extends Component {
  state = {
    user: '',

    componentDidMount(){
      this.getUsers();
      
      }
      
      getUsers = _ => {
      fetch('http://localhost:3001')
      .then(response => console.log(response))//response.json())
      .then(({response}) => this.setState({users: 'response.users'}))
      .catch(error => console.log(error));
      }
      showUsers = user =>
      
      {user.username}
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/blogPosts" component={Products} />
              <Route path="/login" component={Modal} />
              <Route component={Error} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
