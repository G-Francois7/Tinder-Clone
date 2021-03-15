import React from "react";
import Header from './Header';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from './TinderCards';
import SwipeButtons from "./SwippeButtons";
import Chats from './Chats.js'
import ChatScreen from './ChatScreen.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/chat/:person">
          <Header backButton="/chat"/>
            <ChatScreen/>
          </Route>
          <Route path="/chat">
          <Header backButton="/"/>
            <Chats/>
          </Route>
          <Route path="/">
          <Header/>
            <TinderCards/>
            <SwipeButtons/>
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
