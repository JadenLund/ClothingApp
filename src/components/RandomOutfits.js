import React from 'react'
import RenderRandom from './RenderRandom'

function RandomClothing({ outfits }) {
    return (
        <div>
            <h1>Get Inspired by Others Outfits</h1>
            <h2 className='favorites'>Favorites</h2>
            <div className='random-outfits'>
                {outfits.map(outfit => <RenderRandom outfit={outfit} content={outfit.content} key={outfit.id} />)}
            </div>
        </div>
    )
}
export default RandomClothing