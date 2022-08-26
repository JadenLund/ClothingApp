import React from "react";
import RenderRandom from "./RenderRandom";

function RandomFavorite({ outfit, remFavorite }) {

    return <RenderRandom isFavorite={true} outfit={outfit} remFavorite={remFavorite} />

}
export default RandomFavorite