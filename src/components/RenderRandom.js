import React from 'react'

function RenderRandom({ outfit }) {
    //generate a random picture of someone in an outfit
    const { content } = outfit
    return (
        <div>
            <img src={content}/>
            <button className='random-favorites-btn'>Add to favorites</button>
        </div >
    )
}
export default RenderRandom