import { buildTimeValue } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import RenderRandom from './RenderRandom'

function RandomClothing({ outfits }) {
    let [favorite, setFavorite] = useState(false)

    function addFavorites() {
        console.log(outfits)
        //on the click of add to favorites, move to the favorites class
        console.log('hi', outfits[0], favorite)//outfit at the area
        setFavorite(!favorite)
        //pass to the child
    }
    return (
        <div>
            <h1>Get Inspired by Others Outfits</h1>
            <h2 className='favorites'>Favorites</h2>
            {/* <div>{favorite ? <RenderRandom  /> : null}</div> */}
            <div className='random-outfits'>
                {outfits.map(outfit => <RenderRandom outfit={outfit} content={outfit.content} key={outfit.id} addFavorites={addFavorites} />)}
            </div>
        </div>
    )
}
export default RandomClothing