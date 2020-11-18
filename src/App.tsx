import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Landing from "./components/pages/landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
