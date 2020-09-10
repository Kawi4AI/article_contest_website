import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import TextDetection from './Components/TextDetection/TextDetection'
import Community from './Components/Community/Community'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/Community" component={Community} />
        <Route path="/Text Detection" component={TextDetection} />
      </Switch>
    </Router>
  );
}

export default App;
