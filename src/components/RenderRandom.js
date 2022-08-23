import React from 'react'

function RenderRandom({ outfit }) {
    //generate a random picture of someone in an outfit
    const { content } = outfit
    return (
        <div>
            <img src={content}/>
        </div >
    )
}
export default RenderRandom