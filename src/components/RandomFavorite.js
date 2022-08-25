import React from "react";
import RenderRandom from "./RenderRandom";

function RandomFavorite({ favorite }) {

    {/* <h2 className='favorites'>Favorites</h2> */ }
    return (
        <div className='favorites'>
            <h2> Favorites </h2>
            <RenderRandom favorite={favorite}>{favorite ? 'true' : 'false'}</RenderRandom>
        </div>
    )

}
export default RandomFavorite