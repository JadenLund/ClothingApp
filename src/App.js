import React from 'react'
import RandomClothing from './components/RandomOutfits'
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import ClothingContainer from './components/ClothingContainer'

function App() {
    <div>
        <Switch>
            <Route exact to="/">
                <Home />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/project1'>
                <ClothingContainer />
            </Route>
            <Route path='/project2'>
                <RandomClothing />
            </Route>
        </Switch>
    </div >
}
export default App