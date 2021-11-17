import Launches from './components/Launches';
import LaunchSingle from './components/LaunchSingle';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/missions/:id'>
          <LaunchSingle />
        </Route>
        <Route path='/'>
          <Launches />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
