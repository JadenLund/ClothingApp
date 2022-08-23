import React, { useEffect, useState } from 'react'
import { Switch, Route } from "react-router-dom";
import About from './About';
import ClothingContainer from './ClothingContainer'
import RandomClothing from './RandomOutfits';
import NavBar from './NavBar';

function Home() {
    const [shirts, setShirts] = useState([])
    const [pants, setPants] = useState([])
    const [outfits, setOutfits] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/shirts')
            .then(resp => resp.json())
            .then(setShirts) // Take and set our data from our fetch to the state of our poems
    }, [])
    useEffect(() => {
        fetch('http://localhost:3000/pants')
            .then(resp => resp.json())
            .then(setPants) // Take and set our data from our fetch to the state of our poems
    }, [])
    useEffect(() => {
        fetch('http://localhost:3000/random')
            .then(resp => resp.json())
            .then(setOutfits) // Take and set our data from our fetch to the state of our poems
    }, [])

    return (<div>
        <NavBar />
        <Switch>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/project1'>
                <ClothingContainer pants={pants} shirts={shirts}/>
            </Route>
            <Route path='/project2'>
                <RandomClothing outfits={outfits}/>
            </Route>
        </Switch>
    </div >)
}
export default Home