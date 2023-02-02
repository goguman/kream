import Image from "next/image";
import {useSession} from "next-auth/react";
import getProductList from "./getProductList";

const Product = ({product, index, setOpenWishPop, setModelCode}) => {
    const {status} = useSession();

    function clickDiv() {
        alert("div clicked!");
    }

    function clickWish(e) {
        console.log("clicked wish");
        e.preventDefault(); // a태그 href 막기
        setModelCode(product.MODEL_CODE);

        if(status === "authenticated") {
            setOpenWishPop(true);
        }
        e.stopPropagation(); // 이벤트 버블링 막기
    }

    return (
        <div key={index} className="product_item w-[210px] md:w-1/4 px-2 mb-4" onClick={clickDiv}>
            <a href="#" className="item_inner px-1 w-[210px] md:w-full block">
                <div className="thumb_box mx-auto w-fit relative">
                    <Image className="rounded-xl w-full" style={{background:"#dae1fa"}}
                           src={product.THUMBNAIL_PATH} alt="" quality={100} width={240} height={240}/>
                    <div className="btn_wish absolute right-1.5 bottom-1.5 max-w-[24px] max-h-[24px] w-1/12 h-1/12" onClick={clickWish}>
                        <Image className="w-full h-full z-10" src={"/images/bookmark_empty.png"} alt={"bookmark"} width={240} height={240} quality={100} />
                    </div>
                </div>
                <div className="info_box">
                    <div className="brand underline font-bold">{product.BRAND_NAME}</div>
                    <div className="name overflow-hidden leading-4 pb-1 font">{product.MODEL_NAME}</div>
                    <div className="price font-bold">{product.RELEASE_PRICE}원</div>
                    <div className="text-gray-400 text-xs leading-[0.5rem]">즉시 구매가</div>
                </div>
            </a>
        </div>
    );
};
export default Product;