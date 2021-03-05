import React from "react";
import Header from './Header';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

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
            <h1>Homepage</h1>
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
