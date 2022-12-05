import Image from "next/image"

const SlideButton = ({moveSlide, direction}) => {
    return (
        <figure className="py-3 px-4">
            <Image 
                src={`/images/icon-${direction}.svg`}
                alt="arrow" 
                width={14}
                height={14}
                onClick={moveSlide}
            />
        </figure>
    )
}

export default SlideButton