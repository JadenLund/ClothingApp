import { buildTimeValue } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import RandomFavorite from './RandomFavorite'
import RenderRandom from './RenderRandom'

function RandomClothing({ outfits }) {

    return (
        <div>
            <h1>Get Inspired by Others Outfits</h1>
            {/* <RandomFavorite outfit={outfit}/> */}

            <div className='random-outfits'>
                {outfits.map(outfit => <RenderRandom outfit={outfit} content={outfit.content} key={outfit.id} />)}
            </div>
        </div>
    )
}
export default RandomClothing