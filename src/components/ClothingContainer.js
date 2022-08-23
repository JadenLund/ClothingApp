import React from 'react'
import NewClothingForm from './NewClothingForm'
import Clothing from './Clothing'

function ClothingContainer() {
    return (
        <div>
            <div className='saved-outfits'>
                <h2>Saved Outfits</h2>
                <h3>this is where saved outfits will go</h3>
            </div>
            <button> {'<'} </button>
            <Clothing />
            <NewClothingForm />
            <button> {'>'} </button>
        </div>
    )
}
export default ClothingContainer