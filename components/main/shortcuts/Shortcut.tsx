import Image from "next/image";
import {useEffect, useState} from "react";
import getShortcutList from "./getShortcutList";
import {undef} from "@redux-saga/is";

const Shortcut = ({title, subTitle, theme}) => {
    const testItems = [
        {
            TITLE: "크림런 오픈예정!!",
            THUMBNAIL_PATH: "/images/home/cream_run.jpg",
            DIRECTION_URL: "#"
        }, {
            TITLE: "남성 추천!!",
            THUMBNAIL_PATH: "/images/home/men.jpg",
            DIRECTION_URL: "#"
        }, {
            TITLE: "여성 추천!!",
            THUMBNAIL_PATH: "/images/home/women.jpg",
            DIRECTION_URL: "#"
        }, {
            TITLE: "웰컴드로우!!",
            THUMBNAIL_PATH: "/images/home/welcomedraw.jpg",
            DIRECTION_URL: "#"
        }, {
            TITLE: "이번주 브랜드관!!",
            THUMBNAIL_PATH: "/images/home/weekly_brand.jpg",
            DIRECTION_URL: "#"
        }, {
            TITLE: "정가 아래!!",
            THUMBNAIL_PATH: "/images/home/under_price.jpg",
            DIRECTION_URL: "#"
        }, {
            TITLE: "인기 럭셔리!!",
            THUMBNAIL_PATH: "/images/home/favorite_accessory.jpg",
            DIRECTION_URL: "#"
        }
    ];
    const [Items, setItems] = useState(testItems);
    const {data} = (theme) ? getShortcutList(theme) : {data:"nodata"};

    useEffect(() => {
        console.log("data >> ");
        console.log(data);
        if(data && data !== "nodata") setItems(data);
    }, [data]);

    return (
        <div className="shortcut_collection mt-12 max-w-screen-xl mx-auto">
            <div className="product_title px-10 mb-4">
                <div className="title font-bold text-xl">{title}</div>
                <div className="sub_title text-sm text-gray-400">{subTitle}</div>
            </div>
            <div className="shortcut_items_wrap flex flex-wrap w-full h-[28vw] px-10">
                {
                    Items.map((shortcut, index) =>
                        <div key={index} className="shortcut_item text-center flex flex-col px-[0.6vw] w-1/5 h-1/2 mb-2">
                            <div className="shortcut_item_img_wrap w-full h-4/6 bg-gray-500 rounded-xl flex ">
                                <a href={shortcut.DIRECTION_URL} className="h-full w-full overflow-clip flex justify-center items-center rounded-xl">
                                    <Image className="rounded-xl h-full w-fit min-w-fit" src={shortcut.THUMBNAIL_PATH}
                                           alt="jordan" quality={100} width={1000} height={1000}/>
                                </a>
                            </div>
                            <p className="shortcut_item_title block mt-2">{shortcut.TITLE}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};
export default Shortcut;