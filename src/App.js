//import Launches from './components/Launches';
import HomePage from './Pages/HomePage/HomePage';
import About from './Pages/About/About';
import SingleMission from './components/SingleMission/SingleMission';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route path='/missions/:id' component={SingleMission} />
      </Switch>
    </Router>
  );
}

export default App;
