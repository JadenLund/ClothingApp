import React from 'react'

function Clothing({ outfit }) {
    const { content } = outfit
    return (
        <div>
            <img src={content} />
        </div>
    )
}
export default Clothing