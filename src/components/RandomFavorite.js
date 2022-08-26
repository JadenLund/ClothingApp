import React from "react";
import RenderRandom from "./RenderRandom";

function RandomFavorite({ outfit }) {
   
    return (
        <div className='favorites'>

            <RenderRandom outfit={outfit} />
        </div>
    )

}
export default RandomFavorite