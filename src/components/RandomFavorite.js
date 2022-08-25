import React from "react";
import RenderRandom from "./RenderRandom";

function RandomFavorite({ outfit, addFavorite }) {
    {/* <h2 className='favorites'>Favorites</h2> */ }
    return (
        <div className='favorites'>
           
            <RenderRandom outfit={outfit} />
        </div>
    )

}
export default RandomFavorite