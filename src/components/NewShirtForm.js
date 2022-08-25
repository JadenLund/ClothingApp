import React from 'react'

function NewShirtForm({handleShirtSubmit}){
//submit a shirt or pants to the ClothingContainer
return (
    <form className='shirt-clothing-form' onSubmit={handleShirtSubmit}>
        <input name='content'  placeholder='Image Url'/>
        <input type='submit' value='Add your Shirt' />
    </form>
)
}
export default NewShirtForm