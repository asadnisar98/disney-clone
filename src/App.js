import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>

          <Route path="/detail" element={<Detail />}>
            <Detail />
          </Route>

          <Route index path="/" element={<Home />}>
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
