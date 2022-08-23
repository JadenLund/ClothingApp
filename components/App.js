import React from 'react'
import RandomClothing from './RandomOutfits'
import { Switch, Route } from "react-router-dom";

function App() {
    <div>
        <Switch>
            <Route path='/About'>
                <About />
            </Route>
            <Route path='/ClothingContainer'>
                <ClothingContainer />
            </Route>
            <Route path='/RandomClothing'>
                <RandomClothing />
            </Route>
        </Switch>
    </div>
}
export default App