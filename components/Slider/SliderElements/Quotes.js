import React from 'react'
import { PatternQuotes } from '../../Patterns'

const Quotes = ({slides, slidePosition}) => {
    return (
        <section className='relative lg:-right-20 lg:text-left'>
            {slides.map((slide, index) => (
                <figure
                    key={slide.id}
                    className={slidePosition === index ? "block" : "hidden"}
                >
                    <q className="font-light text-xl sm:text-2xl sm:leading-relaxed lg:text-3xl lg:leading-normal">
                        {slide.quote}
                    </q>
                    <figureCaption className="block font-bold text-lg lg:text-xl mt-8">
                        {slide.author}
                        <span className="block lg:inline-block lg:ml-2 font-medium text-secondary">
                            {slide.position}
                        </span>
                    </figureCaption>
                </figure>
            ))}
            <PatternQuotes />
        </section>
    )
}

export default Quotes