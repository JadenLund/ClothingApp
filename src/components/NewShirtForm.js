import React from 'react'

function NewShirtForm({handleShirtSubmit}){
//submit a shirt or pants to the ClothingContainer
return (
    <form className='new-clothing-form' onSubmit={handleShirtSubmit}>
        <input name='content'  placeholder='Image Url'/>
        <input type='submit' value='Add your Clothing' />
    </form>
)
}
export default NewShirtForm