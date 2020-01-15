import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import WordGame from './word-game/WordGame';
import InventoryGame from './inventory-game/InventoryGame';
import NumberGame from './number-game/NumberGame';

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
            <WordGame />
          </Route>
          <Route path='/inventory'>
            <InventoryGame />
          </Route>
          <Route path='/'>
            <NumberGame />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
