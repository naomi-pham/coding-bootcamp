import Image from 'next/image'

const PatterQuotes = () => {
    return (
        <figure className="absolute -top-8 left-1/2 -z-10 h-16 w-20 -translate-x-1/2 transform lg:-top-10 lg:left-1/4 lg:h-20 lg:w-24">
            <Image 
                src="/images/pattern-quotes.svg" 
                alt="quotes-pattern" 
                fill 
                sizes='50vw'
            />
        </figure>
    )
}

export default PatterQuotes