import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProfileForm from './components/ProfileForm';
import ProfileList from './components/ProfileList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/profiles/new" component={ProfileForm}></Route>
        <Route exact path="/profiles" component={ProfileList}></Route>
      </Router>
    </div>
  );
}

export default App;
