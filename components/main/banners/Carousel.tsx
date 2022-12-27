import React, {useLayoutEffect, useRef, useEffect, useState} from "react";
import SlideButton from "./SlideButton";


const Carousel = () => {
    const slides = ['#33a', '#8c9', '#f3e074', '#1f9f3f', '#000'];
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

    function moveToIndex(index) {
        setCurrentIndex(index);
    }

    function useInterval(callback, delay) {
        const savedCallback = useRef();
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);
        useEffect(() => {
           function tick() {
               // @ts-ignore
               savedCallback.current();
           }
           if(delay !== null) {
               let id = setInterval(tick, delay);
               return () => clearInterval(id);
           }
        }, [delay]);
    }

    useInterval(() => {
        let index;
        if(currentIndex + 1 >= slides.length) {
            index = 0;
        } else {
            index = currentIndex + 1;
        }
        setCurrentIndex(index);
    }, 5000);

    return (
        <div className="slider-area w-full h-96">
            <div className="slider w-full h-full relative flex items-center overflow-hidden">
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
                <div className="flex absolute bottom-4 h-6 text-xs right-1/2 translate-x-1/2">
                    {
                        Array.from({length: slides.length}).map((item, index) => (
                            <div className="z-50 m-2 h-full w-6 hover:cursor-pointer bg-gray-500 opacity-30 rounded-xl hover:bg-yellow-400 active:bg-yellow-400"
                                 key={index} onClick={()=>moveToIndex(index)} >
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
export default Carousel;