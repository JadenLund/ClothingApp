import React from 'react'
import RandomClothing from './RandomOutfits'
import { Switch, Route } from "react-router-dom";

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