import React, { useEffect, useState } from 'react'
import { Switch, Route } from "react-router-dom";
import About from './About';
import ClothingContainer from './ClothingContainer'
import RandomClothing from './RandomOutfits';
import NavBar from './NavBar';

function Home() {
    // const [pants, setPants] = useState([])
    // const [shirts, setShirts] = useState([])
    // useEffect(() => {
    //     fetch('data.json')
    //         .then(resp => resp.json())
    //         .then(setPants) // Take and set our data from our fetch to the state of our poems
    // }, [])
    // useEffect(() => {
    //     fetch('data.json')
    //         .then(resp => resp.json())
    //         .then(setShirts) // Take and set our data from our fetch to the state of our poems
    // }, [])

    return (<div>
        <NavBar />
        <Switch>
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
    </div >)
}
export default Home