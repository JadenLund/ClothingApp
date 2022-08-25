import React, { useState } from 'react'

function RenderRandom({ outfit }) {
    //generate a random picture of someone in an outfit
    const { content } = outfit
    let [favorite, setFavorite] = useState(false)

    const handleClick = () => {
        favorite = setFavorite(!favorite)
        console.log(favorite)
    }

    return (
        <div>
            <img src={content} />
            <button className='random-favorites-btn' onClick={handleClick} >Add to favorites</button>
        </div >
    )
}
export default RenderRandom
