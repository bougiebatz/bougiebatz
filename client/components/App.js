import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Large from './Largephotos.js';
import Medium from './Mediumphotos.js';
import Small from './Smallphotos.js';



class App extends React.Component {
  constructor() {
    super()

    this.state = {}
  }
  render () {
    return (
      <div>
        <ul className="header">
          <li><Link to="/Large" className="links">Large</Link></li>
          <li><Link to="/Medium" className="links">Medium</Link></li>
          <li><Link to="/Small" className="links">Small</Link></li>
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
    <Route path="/" component={App}>
      <Route path="Large" component={Large} />
      <Route path="Medium" component={Medium} />
      <Route path="Small" component={Small} />
    </Route>
  </Router>
), document.getElementById('treetop'))

export default App; 
