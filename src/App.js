import React, { useState } from "react";
import { BrowserRouter as Router, Route, useHistory, Switch} from "react-router-dom";
import BubblePage from "./components/BubblePage";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {

  const history = useHistory();

  



  return (
    
      <div className="App">
        <Router>
        <Route exact path="/" component={Login} />
        <Switch>
        <PrivateRoute exact path="/bubblepage" component={BubblePage}/>
        </Switch>
        </Router>
      </div>
    
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute