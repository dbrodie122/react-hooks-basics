import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import WordGameApp from './word-game/WordGameApp';
import InventoryGameApp from './inventory-game/InventoryGameApp';
import NumberGameApp from './number-game/NumberGameApp';

export default function App() {
  return (
    <Router>
      <div>
        <nav className='navbar bg-dark'>
          <Link className='nav-link' to='/'>
            The Numbers Game
          </Link>
          <Link className='nav-link' to='/word'>
            The Word Game
          </Link>
          <Link className='nav-link' to='/inventory'>
            The Inventory Game
          </Link>
        </nav>

        <Switch>
          <Route path='/word'>
            <WordGameApp />
          </Route>
          <Route path='/inventory'>
            <InventoryGameApp />
          </Route>
          <Route path='/'>
            <NumberGameApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
