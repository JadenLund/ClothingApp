import React from 'react'

function RenderRandom({ outfit, addFavorites  }) {
    //generate a random picture of someone in an outfit
    const { content } = outfit
    return (
        <div>
            <img src={content}/>
            <button className='random-favorites-btn' onClick={addFavorites}>Add to favorites</button>
        </div >
    )
}
export default RenderRandom