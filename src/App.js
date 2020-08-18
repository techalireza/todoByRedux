import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import Index from './views/Index/Index'
import AddForm from './views/AddForm/AddForm'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/add" exact>
            <AddForm />
          </Route>
          <Route path="/update/:id" exact>
            <AddForm />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
