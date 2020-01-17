import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Topbar from './components/Topbar';
import store from './redux/store'
import NotFound from './components/NotFound'
import Begin from './components/Begin'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <div className="App">
          <Topbar />
          <Switch>
            {/* <Route exact path="/" component={Authenticate(Login)} /> */}
            
            {/* <Route
              exact
              path="/bulk/concepts/:type/:typeName/:collectionName/:dictionaryName/:language"
              component={Authenticate(AddBulkConcepts)}
            /> */}
            
            <Route component={Begin} />
          </Switch>
        </div>
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
