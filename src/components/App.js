import React, { useEffect, useState } from 'react'
import { Switch, Route } from "react-router-dom";
import About from './About';
import ClothingContainer from './ClothingContainer'
import RandomClothing from './RandomOutfits';
import NavBar from './NavBar';
import Clothing from './Clothing'

import NewShirtForm from './NewShirtForm'
import NewPantsForm from './NewPantsForm'


function App() {
    const [shirts, setShirts] = useState([])
    const [pants, setPants] = useState([])
    const [outfits, setOutfits] = useState([])

    const [showShirtForm, setShowShirtForm] = useState(true)
    const [showPantsForm, setShowPantsForm] = useState(true)
    


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




    const handleShirtFormClick = () => {
        setShowShirtForm(!showShirtForm);
    }

    const handleAddNewShirt = (newShirtData) => {
        setShirts([...shirts, newShirtData])
    }

    const handlePantsFormClick = () => {
        setShowPantsForm(showPantsForm => !showPantsForm);
    }

    function handleShirtSubmit(e) {
        e.preventDefault();

        const newShirt = {
            content: e.target.content.value,
        }
        // console.log(newShirt)

        fetch('http://localhost:3000/shirts', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(newShirt)
        })
        .then(res => res.json())
        .then(newShirtData => handleAddNewShirt(newShirtData))
        // .then(console.log)

    }

    function handlePantsSubmit(e) {
        e.preventDefault();

        const newPants ={
            content: e.target.content.value,
        }
        // console.log(newPants)

        fetch('http://localhost:3000/pants', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(newPants)
        })
        .then(res => res.json())
        .then(newPantsData => setPants([...pants, newPantsData]))
    }

    

    return (
    <div>
        <NavBar />
       

        <Switch>
            <Route exact path='/'>
                <About />
            </Route>

            <Route path='/project1'>
            <div className='sidebar'>
            <button className='add-new-shirt' onClick={handleShirtFormClick}>Add New Shirt</button>
            {showShirtForm ? null : <NewShirtForm handleShirtSubmit={handleShirtSubmit}/>}
        </div>
        <div className='sidebar-2'>
        <button className='add-new-pants' onClick={handlePantsFormClick}> Add New Pants</button>
            {showPantsForm ? null : <NewPantsForm handlePantsSubmit={handlePantsSubmit}/>}
        </div>
                <Clothing shirts={shirts} pants={pants}/>
            </Route>
            <Route path='/project2'>
                <RandomClothing outfits={outfits} />
            </Route>
        </Switch>
    </div >)
}
export default App