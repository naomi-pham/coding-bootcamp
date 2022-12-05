import Image from 'next/image'
import React from 'react'

const Images = ({slides, slidePosition}) => {
    return (
        <>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={slidePosition === index ? "block" : "hidden"}
                >
                    <figure className="relative h-64 w-64 shadow-2xl sm:h-96 sm:w-96 lg:w-[30rem] lg:h-[30rem]">
                        <Image
                            src={slide.img.url}
                            alt={slide.img.altText}
                            fill
                            sizes='100%'
                        />
                    </figure>
                </div>
            ))}
        </>
    )
}

export default Images