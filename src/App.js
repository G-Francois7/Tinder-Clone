import React from "react";
import Header from './Header';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <Switch>
          <Route path="/chat">
            <h1>Chat page</h1>
          </Route>
          <Route path="/">
            <TinderCards/>
          </Route>
        </Switch>
        
    </Router>
        {/*<Header/>*/}    
        {/* Tinder Cards */}
        {/* Buttons below tinder cards */}
      
        {/* Chats screen */}
        {/* Individual chats screen */}    


    </div>
  );
}
        
export default App;
