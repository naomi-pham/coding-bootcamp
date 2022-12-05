import React, { useState } from 'react'
import { PatternBg } from '../Patterns'
import { Buttons, Images, Quotes } from './SliderElements'
import { slides } from '../../data/SlideData'

const Slider = () => {
    const totalSlides = slides.length
    const [slidePosition, setSlidePosition] = useState(0)

    function moveToNextSlide() {
        slidePosition === totalSlides - 1 ? 
        setSlidePosition(0) : 
        setSlidePosition(slidePosition + 1)
    }

    function moveToPrevSlide() {
        slidePosition === 0 ? 
        setSlidePosition(totalSlides - 1) : 
        setSlidePosition(slidePosition - 1)
    }

    return (
        <article className="flex flex-col center gap-24 lg:flex-row-reverse lg:gap-0">
            <section className='relative'>
                <Images 
                    slides={slides} 
                    slidePosition={slidePosition}
                />
                <Buttons 
                    moveToNextSlide={moveToNextSlide}
                    moveToPrevSlide={moveToPrevSlide}
                />
                <PatternBg />
            </section>
            <Quotes 
                slides={slides}
                slidePosition={slidePosition}
            />
        </article>
    )
}

export default Slider