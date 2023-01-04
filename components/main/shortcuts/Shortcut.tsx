import Image from "next/image";
import {useState} from "react";
import getShortcutList from "./getShortcutList";

const Shortcut = ({title, subTitle, theme}) => {
    const [Items, setItems] = useState([]);
    const {data} = getShortcutList(theme);

    let shortcuts;

    const items1 = [
        {
            color: "#33a",
            title: "크림런 오픈예정",
            imgPath: "/images/home/cream_run.jpg"
        }, {
            color: "#8c9",
            title: "남성 추천",
            imgPath: "/images/home/men.jpg"
        }, {
            color: "#a331a1",
            title: "여성 추천",
            imgPath: "/images/home/women.jpg"
        }, {
            color: "#f3e074",
            title: "웰컴드로우",
            imgPath: "/images/home/welcomedraw.jpg"
        }, {
            color: "#fff",
            title: "이번주 브랜드관",
            imgPath: "/images/home/weekly_brand.jpg"
        }, {
            color: "#000",
            title: "정가 아래",
            imgPath: "/images/home/under_price.jpg"
        }, {
            color: "#b1e34a",
            title: "인기 럭셔리",
            imgPath: "/images/home/favorite_accessory.jpg"
        }, {
            color: "#b1e34a",
            title: "!!!!!!!!!!!!!!!!!!DB에도 등록하기 3가지 추가",
            imgPath: "/images/home/favorite_accessory.jpg"
        }, {
            color: "#b1e34a",
            title: "인기 럭셔리",
            imgPath: "/images/home/favorite_accessory.jpg"
        }, {
            color: "#b1e34a",
            title: "인기 럭셔리",
            imgPath: "/images/home/favorite_accessory.jpg"
        },
    ];

    const items2 = [
        {
            color: "#33a",
            title: "럭키박스",
            imgPath: "/images/NikeAmbushAirForce1Low.png"
        }, {
            color: "#8c9",
            title: "남성 추천",
            imgPath: "/images/NikeSBDunkLowSandy.png"
        }, {
            color: "#a331a1",
            title: "여성 추천",
            imgPath: "/images/nike02.png"
        }, {
            color: "#f3e074",
            title: "셀럽픽",
            imgPath: "/images/nike01.png"
        }, {
            color: "#fff",
            title: "이번주 브랜드관",
            imgPath: "/images/NikeSBDunkLowSandy.png"
        }, {
            color: "#000",
            title: "정가 아래",
            imgPath: "/images/shoes01.png"
        }, {
            color: "#b1e34a",
            title: "인기 럭셔리",
            imgPath: "/images/NikeAmbushAirForce1Low.png"
        },
    ];

    shortcuts = items1;

    return (
        <div className="shortcut_collection mt-12 max-w-screen-xl mx-auto">
            <div className="product_title px-10 mb-4">
                <div className="title font-bold text-xl">{title}</div>
                <div className="sub_title text-sm text-gray-400">{subTitle}</div>
            </div>
            <div className="shortcut_items_wrap flex flex-wrap w-full h-[28vw] px-10">
                {
                    shortcuts.map((shortcut, index) =>
                        <div key={index} className="shortcut_item text-center flex flex-col px-[0.6vw] w-1/5 h-1/2 mb-2">
                            <div className="shortcut_item_img_wrap w-full h-4/6 bg-gray-500 rounded-xl flex ">
                                <a href="#" className="h-full w-full overflow-clip flex justify-center items-center rounded-xl">
                                    <Image className="rounded-xl h-full w-fit min-w-fit" src={shortcut.imgPath}
                                           alt="jordan" quality={100} width={1000} height={1000}/>
                                </a>
                            </div>
                            <p className="shortcut_item_title block mt-2">{shortcut.title}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};
export default Shortcut;