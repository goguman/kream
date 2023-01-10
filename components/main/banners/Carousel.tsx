import React, {useLayoutEffect, useRef, useEffect, useState} from "react";
import SlideButton from "./SlideButton";
import Image from "next/image";

const Carousel = () => {
    // const items;
    const [currentIndex, setCurrentIndex] = useState(0);
    const bannerList = [
        {
            url:'/images/banner/carousel/polo_ugg_slippers.jpg',
            background:'#f4f2e3'
        },{
            url:'/images/banner/carousel/discount.jpg',
            background:'#f9f3dc'
        },{
            url:'/images/banner/carousel/kakaopay_discount.jpg',
            background:'#ffe818'
        }
    ]

    function handleSwipe(direction) {
        let index;
        if(currentIndex + direction > bannerList.length-1) {
            index = 0;
        } else if(currentIndex + direction < 0) {
            index = bannerList.length-1;
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
        if(currentIndex + 1 >= bannerList.length) {
            index = 0;
        } else {
            index = currentIndex + 1;
        }
        setCurrentIndex(index);
    }, 5000);

    return (
        <div className="slider-area w-full h-[46vw] max-h-[480px]">
            <div className="slider w-full h-full relative flex items-center overflow-hidden">
                <SlideButton direction="prev" onClick={() => handleSwipe((-1))} />
                <SlideButton direction="next" onClick={() => handleSwipe((1))} />
                <div className="slider-track flex w-full h-full bg-black absolute"
                    style={{transform: `translateX(${-100 * currentIndex}%)`}}>
                    {
                        bannerList.map((item, index) =>
                            <div key={index} className="slider-item flex-none w-full h-full">
                                <a>
                                    <div className="h-full w-full flex justify-center overflow-hidden" style={{background:item.background}}>
                                        <Image className="w-fit min-w-fit h-full !important" src={item.url} alt="index"
                                               width={2000} height={470} quality={100}/>
                                    </div>
                                </a>
                            </div>
                        )
                    }
                </div>
                <div className="flex absolute bottom-4 h-2 text-xs right-1/2 translate-x-1/2">
                    {
                        Array.from({length: bannerList.length}).map((item, index) => (
                            <div className={`z-10 m-2 h-full w-2 hover:cursor-pointer bg-gray-500 opacity-30 rounded-xl hover:bg-yellow-400 active:bg-yellow-400 
                                    ${index==currentIndex?"bg-amber-400":"bg-gray-500"}`}
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