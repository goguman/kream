import {useRef} from "react";
import getProduct from "./products/getProduct";
import Image from "next/image";

const AddWish = (props) => {
    console.log("modelCode: ");
    console.log(typeof props.modelCode);
    console.log(props.modelCode);

    const outside = useRef();
    const {data} = getProduct(props.modelCode);
    console.log("get Product : ");
    console.log(data);

    return (
        <div className="wish_modal z-50 fixed bg-[#09090990] w-screen h-screen inset-0"
             ref={outside} onClick={e=>{if(e.target == outside.current) props.setOpenWishPop(false)}}>
            <div className="modal_section fixed bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[440px] h-[530px] rounded-2xl">
                <div className="wish_modal_title w-full flex justify-center font-bold text-xl py-4">
                    관심 상품 추가
                </div>
                <div className="wish_modal_content w-full flex flex-wrap justify-center">
                    {(data!=undefined)
                        ? (
                            <div className="wish_item_info w-full px-8">
                                <div className="w-full pb-3 flex items-center border-b-[0.5px] border-b-gray-200">
                                    <div className="wish_thumbnail w-[70px] h-[70px] rounded-md bg-gray-100">
                                        <Image src={data[0].THUMBNAIL_PATH} alt={"wish_thumbnail"} width={70} height={70} quality={100}/>
                                    </div>
                                    <div className="ml-2">
                                        <p className="text-sm">{data[0].MODEL_NAME}</p>
                                        <p className="text-xs text-gray-400">{data[0].MODEL_SUBNAME}</p>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                    <div className="btn_confirm border border-gray-300 w-[120px] py-2 px-10 mt-3 rounded-xl cursor-pointer"
                         onClick={()=>props.setOpenWishPop(false)}>
                        확인
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddWish;