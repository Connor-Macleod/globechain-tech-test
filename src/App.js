import React from 'react';
import './App.css';
import Index from './Components/index/index';
import CompanyDetails from './Components/company-details/company-details';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  return (
          <Router>
            <div className="App">
                <Link to={"/"}>Home</Link>
                <Route path="/" exact component={ Index }/>
                <Route path="/company/:id" component={ CompanyDetails }/>
            </div>
          </Router>
  );
}

export default App;
