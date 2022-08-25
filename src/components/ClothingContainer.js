import React from 'react'
import NewClothingForm from './NewClothingForm'
import Clothing from './Clothing'

function ClothingContainer({ shirts, pants }) {
    // const countUp = () => {
    //    for(let i = 0 ; i < key.length ; i++){
    //         console.log(key)
    //    }
    // }
    // const countDown = () => {

    // }

    return (
        <div>
            <div className='saved-outfits'>
                <h2>Saved Outfits</h2>
                <h3>this is where saved outfits will go</h3>
            </div>

            <button > {'<'} </button>
            <h3>Tops</h3>
            <div className='shirts'>
                {shirts.map(outfit => <Clothing outfit={outfit} content={outfit.content} key={outfit.id} />)}
            </div>
            <NewClothingForm />
            <button> {'>'} </button>

            <button> {'<'} </button>
            <h3>Bottoms</h3>
            <div className='pants'>
                {pants.map(outfit => <Clothing outfit={outfit} content={outfit.content} key={outfit.id} />)}
            </div>
            <NewClothingForm />
            <button> {'>'} </button>
        </div>
    )
}
export default ClothingContainer