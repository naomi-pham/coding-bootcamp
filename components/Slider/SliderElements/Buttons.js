import SlideButton from '../../Buttons/SlideButton'

const Buttons = ({moveToPrevSlide, moveToNextSlide}) => {
    return (
        <div className="absolute -bottom-6 left-1/2 lg:left-1/3 flex -translate-x-1/2 transform rounded-full bg-white">
            <SlideButton 
                direction="prev" 
                moveSlide={moveToPrevSlide}
            />
            <SlideButton 
                direction="next" 
                moveSlide={moveToNextSlide}
            />
        </div>
    )
}

export default Buttons