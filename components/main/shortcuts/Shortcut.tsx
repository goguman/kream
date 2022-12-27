import Image from "next/image";

const Shortcut = () => {
    const shortcuts = [
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

    return (
        <div className="shortcut_collection flex mt-12 max-w-screen-xl mx-auto">
            <div className="shortcut_items_wrap flex flex-wrap w-full h-auto px-10">
                {
                    shortcuts.map((shortcut, index) =>
                        <div key={index} className="shortcut_item text-center flex flex-col px-2 w-1/5 h-1/2 mb-2">
                            <div className="shortcut_item_img_wrap w-full h-auto bg-gray-500 rounded-2xl flex ">
                                <a href="#" className="w-full h-full p-2">
                                    <Image className="rounded-2xl mx-auto" src={shortcut.imgPath} alt="jordan" quality={100} width={80} height={80}/>
                                </a>
                            </div>
                            <p className="shortcut_item_title block mt-1">{shortcut.title}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};
export default Shortcut;