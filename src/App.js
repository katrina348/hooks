import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Hooks from './components/Hooks';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/hooks' component={Hooks}/>
      </Switch>
    </div>
  );
}

export default App;
