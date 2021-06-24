import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
