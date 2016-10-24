import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Large from './Largephotos.js';
import Medium from './Mediumphotos.js';
import Small from './Smallphotos.js';
import PhotoStory from './PhotoStory.js'
import css from '../styles/style.css';
import Home from './home.js';
import Saved from './dbLinks.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render () {
    return (
      <div>
        <ul className="header">
          <li><Link to="/home" className="newsLink"> Visual News </Link></li>
          <li><Link to="/Large" className="links">Daily</Link></li>
          <li><Link to="/Medium" className="links">Weekly</Link></li>
          <li><Link to="/Small" className="links">Monthly</Link></li>
          <li><Link to="/PhotoStory" className="links">PhotoStory</Link></li>
          <li><Link to="/Saved" className="links">Saved Stories</Link></li>
          <li> <a target="_blank" href="https://soundcloud.com/pranay-martin" className="links">News Tunes</a></li>
        </ul>
        <div className="content">
        {this.props.children}
      </div>
    </div>
    )
  }
}

render((
  <Router history={browserHistory}>
  <IndexRoute component={Home}/>
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="Large" component={Large} />
      <Route path="Medium" component={Medium} />
      <Route path="Small" component={Small} />
      <Route path="PhotoStory" component={PhotoStory} />
      <Route path="Saved" component={Saved} />
      <IndexRoute component={Home}/>
    </Route>
    <Route path="*" component={Home}/>
  </Router>
), document.getElementById('treetop'))

export default App;
