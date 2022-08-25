import React from 'react'

function Clothing({ outfit }) {
    // const { content } = outfit
    return (
        <div>
            <img src={outfit.content} />
        </div>
    )
}
export default Clothing