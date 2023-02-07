import {useRef, useState} from "react";
import getProduct from "./getProduct";
import Image from "next/image";
import getSizeList from "./getSizeList";

const AddWish = (props) => {
    console.log("modelCode: ");
    // console.log(typeof props.modelCode);
    console.log(props.modelCode);
    console.log(props.wishListArray);

    const outside = useRef();
    const {data:modelInfo} = getProduct(props.modelCode);
    const {data:sizeList} = getSizeList(props.modelCode);
    let isWished = false;

    function checkWished(productCode) {
        isWished = props.wishListArray.indexOf(productCode) >= 0;
    }

    return (
        <div className="wish_modal z-50 fixed bg-[#09090990] w-screen h-screen inset-0"
             ref={outside} onClick={e=>{if(e.target == outside.current) props.setOpenWishPop(false)}}>
            <div className="modal_section fixed bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[440px] h-[530px] rounded-2xl">
                <div className="wish_modal_title w-full flex justify-center font-bold text-xl py-4">
                    관심 상품 추가
                </div>
                <div className="wish_modal_content w-full flex flex-wrap justify-center">
                    {(modelInfo)
                        ? (
                            <div className="wish_item_info w-full px-8">
                                <div className="w-full pb-3 flex items-center border-b-[0.5px] border-b-gray-200">
                                    <div className="wish_thumbnail w-[70px] h-[70px] rounded-md bg-gray-100">
                                        <Image src={modelInfo[0].THUMBNAIL_PATH} alt={"wish_thumbnail"} width={70} height={70} quality={100}/>
                                    </div>
                                    <div className="ml-2">
                                        <p className="text-sm">{modelInfo[0].MODEL_NAME}</p>
                                        <p className="text-xs text-gray-400">{modelInfo[0].MODEL_SUBNAME}</p>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                    <div className="wish_size_list w-full h-[288px] pl-8 mt-2 flex flex-wrap overflow-y-scroll cursor-pointer">
                        {sizeList && sizeList.map((item) => {
                            checkWished(item.PRODUCT_CODE);
                            return <div className={`w-[120px] h-[52px] m-1 rounded-xl flex flex-col items-center justify-center text-[0.9rem]
                                        ${isWished ? "border-2 border-black" : "border border-gray-300"}`}>
                                <p className="font-bold">{item.SIZE}</p>
                                <p>
                                    <Image className="w-[16px] h-[16px]"
                                           src={isWished ? "/images/bookmark_fill.png" : "/images/bookmark_empty.png"}
                                           alt={"bookmark"} width={240} height={240} quality={100}/>
                                </p>
                            </div>
                        })
                        }
                    </div>
                    <div className="btn_confirm border border-gray-300 w-[120px] py-2 px-10 mt-7 rounded-xl cursor-pointer"
                         onClick={()=>props.setOpenWishPop(false)}>
                        확인
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddWish;