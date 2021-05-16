import './App.css';
import {Link, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path='/about'><About /></Route>
      <Route path='/' exact={true}><Home /></Route>
    </div>
  );
}

export default App;
