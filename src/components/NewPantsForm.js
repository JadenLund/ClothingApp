import React from 'react'

function NewPantsForm({handlePantsSubmit}){
//submit a shirt or pants to the ClothingContainer
return (
    <form className='pants-clothing-form' onSubmit={handlePantsSubmit}>
        <input name='content'  placeholder='Image Url'/>
        <input type='submit' value='Add your Pants' />
    </form>
)
}
export default NewPantsForm