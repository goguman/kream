import {useState} from "react";
import SlideButton from "./SlideButton";

const Carousel = () => {
    const slides = ['#33a', '#8c9', '#f3e074', '#fff', '#000'];
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleSwipe(direction) {
        let index;
        if(currentIndex + direction > slides.length-1) {
            index = 0;
        } else if(currentIndex + direction < 0) {
            index = slides.length-1;
        } else {
            index = currentIndex + direction;
        }
        setCurrentIndex(index);
    }

    return (
        <div className="slider-area w-full h-80">
            <div className="slider w-full h-full relative flex items-center">
                <SlideButton direction="prev" onClick={() => handleSwipe((-1))} />
                <SlideButton direction="next" onClick={() => handleSwipe((1))} />
                <div className="slider-track flex w-full h-full bg-black absolute"
                    style={{transform: `translateX(${-100 * currentIndex}%)`}}>
                    {
                        slides.map((color, index) =>
                            <div key={index} className="slider-item flex-none w-full h-full">
                                <a href="components/main/banners#">
                                    <div className="h-full items-center" style={{background: color}}>
                                    </div>
                                </a>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
export default Carousel;