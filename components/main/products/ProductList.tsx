import {useEffect, useState} from "react";
import getProductList from "./getProductList";
import {nanoid} from "nanoid";
import AddWish from "./AddWish";
import Product from "./Product";

const ProductList = ({title, subTitle, themeName}) => {
    const theme = themeName;
    const [products, setProducts] = useState([]);
    const [openWishPop, setOpenWishPop] = useState(false);
    const [Skip, setSkip] = useState(0);
    const [Limit, setLimit] = useState(4);
    const [LoadMoreBtn, setLoadMoreBtn] = useState(true);
    const [modelCode, setModelCode] = useState(null);
    const [wishListArray, setWishListArray] = useState([]);
    const rowLimit = 4;
    const {data} = getProductList(theme);

    useEffect(() => {
        let body = {
            skip: Skip,
            limit: Limit,
        };
        getProducts(body);
    }, [data]);

    useEffect(() => {
        if(openWishPop) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.removeProperty('overflow');
        }
    }, [openWishPop])

    const getProducts = (body) => {
        if(data == undefined) return;

        const productInfo = data.slice(body.skip, body.limit);

        if(body.loadMore) {
            setProducts([...products, ...productInfo]);
        } else {
            setProducts(productInfo);
        }

        if(body.skip + rowLimit >= data.length) {
            setLoadMoreBtn(false);
        }
    }

    const loadMoreHandler = () => {
        let body = {
            skip: Skip + rowLimit,
            limit: Limit + rowLimit,
            loadMore: true
        };
        setLimit(body.limit);
        setSkip(body.skip);
        getProducts(body);
    };



    return (
        <div className="home_products mt-12 max-w-screen-xl mx-auto" key={nanoid()}>
            <div className="product_title px-10 mb-4">
                <div className="title font-bold text-xl">{title}</div>
                <div className="sub_title text-sm text-gray-400">{subTitle}</div>
            </div>
            <div className="product_list_wrap flex md:flex-wrap w-full h-auto px-10 overflow-x-scroll scrollbar-hide md:overflow-auto">
                {
                    data &&
                    products.map((product, index) =>
                        <Product product={product} index={index} setOpenWishPop={setOpenWishPop}
                                 setWishListArray={setWishListArray} setModelCode={setModelCode} keyId={nanoid()}/>
                    )
                }
            </div>
            <div className={`load_more_btn_wrap ${LoadMoreBtn ? "flex" : "hidden"}`}>
                <button className="load_more_btn mx-auto mt-4 rounded-lg w-30 h-10 text-gray-500 px-6
                            border border-gray-300" onClick={loadMoreHandler}>
                    더보기
                </button>
            </div>
            {openWishPop ? <AddWish openWishPop={openWishPop} setOpenWishPop={setOpenWishPop}
                                    wishListArray={wishListArray} modelCode={modelCode}/> : null}
        </div>
    );
};
export default ProductList;