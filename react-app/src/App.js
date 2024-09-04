// import logo from './logo.svg';
// import './App.css';
// import {useState, useEffect} from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import Detail from "./route/Detail";
import Home from "./route/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route  path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />}>
          <Detail />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

