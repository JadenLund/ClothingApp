import React, { useState } from 'react'

function RenderRandom({ outfit, addFavorite }) {
    //generate a random picture of someone in an outfit
    const { content } = outfit
   
    // console.log(favorite)

    return (
        <div>
            <img src={content} />
            <button className='random-favorites-btn' onClick={() => { addFavorite(outfit) }} >Add to favorites</button>
        </div >
    )
}
export default RenderRandom
