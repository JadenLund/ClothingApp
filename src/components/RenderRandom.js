import React, { useState } from 'react'

function RenderRandom({ outfit, addFavorite, isFavorite, remFavorite }) {
    const { content } = outfit

    return (
        <div>
            <img src={content} />
            <button className='random-favorites-btn' onClick={() => {isFavorite ? remFavorite(outfit) : addFavorite(outfit) }} > {isFavorite ? 'Remove' : 'Add'}</button>
        </div >
    )
}
export default RenderRandom
