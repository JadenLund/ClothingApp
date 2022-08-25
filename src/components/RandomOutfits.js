import { buildTimeValue } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import RandomFavorite from './RandomFavorite'
import RenderRandom from './RenderRandom'

function RandomOutfits({ outfits }) {
    const [favoriteOutfits, setFavoriteOutfits] = useState([])


    function addFavorite(outfit) {
        setFavoriteOutfits([...favoriteOutfits, outfit])
    console.log(outfit)
    }
    

    return (
        <div>
            <div className='favorite-outfits'>
                <h2> Favorites </h2>
                {favoriteOutfits.map(outfit => <RandomFavorite outfit={outfit} content={outfit.content} key={outfit.id} />)}
            </div>

            <h1>Get Inspired by Others Outfits</h1>
            <div className='random-outfits'>
                {outfits.map(outfit => <RenderRandom addFavorite={addFavorite} outfit={outfit} content={outfit.content} key={outfit.id} />)}
            </div>
        </div>
    )
}
export default RandomOutfits