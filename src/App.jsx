import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import ListUser from './pages/ListUser';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';

const App = () => {
  return (
    <Router>
      <div className='container mt-3'>
        <Header />
        <Switch>
          <Route exact path='/' component={ListUser} />
          <Route exact path='/new' component={CreateUser} />
          <Route exact path='/edit/:id?' component={EditUser} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
