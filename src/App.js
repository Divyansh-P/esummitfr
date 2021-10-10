
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Events from './containers/Events/Events';
import Navbar from './containers/Navbar/Navbar';
import Sponsers from './containers/Sponsers/Sponsers';
import Contact from './containers/contact/component/contact/Contact'
import Register from './containers/Register/RegisterCards/Register';
import Register1 from './containers/Register/Register1';
import Home from './containers/Home/Home';
import Speakers from './containers/speakers/Speakers';
import Team from './containers/Team/Team';
import Cube from './containers/Cube/Cube';

function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/events" ><Events /></Route>
          <Route path="/speakers" ><Speakers /></Route>
          <Route path="/sponsers" ><Sponsers /></Route>
          <Route path="/contact-us" ><Contact /></Route>
          <Route path="/form"><Register1 />  </Route>
          <Route path="/register"><Register /></Route>
          <Route path="/teams"><Team/></Route>
        </Switch>
        {/* <Cube /> */}
      </div>

    </Router>
  );
}

export default App;
