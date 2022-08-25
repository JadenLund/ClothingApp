import React, { useState } from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft, FaSlideshare } from 'react-icons/fa'

function Clothing({shirts, pants}) {
    // console.log(shirts)
    
    const [current, setCurrent] = useState(0)
    const [pantsCurrent, setPantsCurrent] = useState(0)
    const length = shirts.length
    const pantsLength = pants.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const pantsNextSlide = () => {
        setPantsCurrent(pantsCurrent === length -1 ? 0 : pantsCurrent + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    const pantsPrevSlide = () => {
        setPantsCurrent(pantsCurrent === 0 ? length -1 : pantsCurrent - 1)
    }
    // console.log(current)


     if (!Array.isArray(shirts) || shirts.length <= 0) {
        return null;
     }

     if (!Array.isArray(pants) || pants.length <= 0) {
        return null;
     }
    
    return (
        <div>
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            {shirts.map((shirt, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={shirt.content} alt='images' className='shirt-image'/>)}
                        

                    </div>
                )
                 
            })}
            
        </section>
        <section className='pants-slider'>
            <FaArrowAltCircleLeft className='pants-left-arrow' onClick={pantsPrevSlide}/>
            <FaArrowAltCircleRight className='pants-right-arrow' onClick={pantsNextSlide}/>
            {pants.map((pant, index) => {
                return (
                    <div className={index === pantsCurrent ? 'slide active' : 'slide'} key={index}>
                        {index === pantsCurrent && (<img src={pant.content} alt='images' className='pants-image'/>)}
                        

                    </div>
                )
                 
            })}
            
        </section>
        </div>
        
        
    )
}
export default Clothing