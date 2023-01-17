import Carousel from "../banners/Carousel";
import Shortcut from "../shortcuts/Shortcut";
import ProductList from "../products/ProductList";
import Image from "next/image";
import BottomBanner from "../../common/BottomBanner";
import SingleBanner from "../banners/SingleBanner";
import {nanoid} from "@reduxjs/toolkit";
import {useCallback, useEffect, useState} from "react";

const Recommendation = () => {
    const [from, setFrom] = useState(0);
    const [contents, setContents] = useState([]);
    const [isFetching, setFetching] = useState(false);
    const [hasNextPage, setNextPage] = useState(true);

    const fetchContents = useCallback(async () => {
        // 관리자 페이지 만들 경우 axios 살리고 DB에서 컨텐츠 조회하기
        // const {data} = await axios.get<PaginationResponse<any>>('http://localhost:4000/fetchMainContents', {
        //     params: {page, size: PAGE_SIZE},
        // })
        // setContents(contents.concat(data));
        let nextContents;
        let to;
        to = from+4;
        nextContents = contentsList.slice(from, to);
        setContents(contents.concat(nextContents));
        console.log("contents");
        console.log(from);
        console.log(nextContents);
        console.log(contents);
        setFrom(to);
        setNextPage(to < contentsList.length);
        setFetching(false);
    }, [from]);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, offsetHeight } = document.documentElement;
            if (window.innerHeight + scrollTop >= offsetHeight-1) {
                setFetching(true);
            }
        }
        setFetching(true);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isFetching && hasNextPage) fetchContents().then();
        else if (!hasNextPage) setFetching(false);
    }, [isFetching]);

    const contentsList = [
        <SingleBanner imgPath="/images/banner/sneakers.jpg" backgroundColor={"#f4ebe9"} url="#" key={nanoid()} />,
        <ProductList title="Most Popular" subTitle="인기 상품" theme="justDropped" key={nanoid()} />,
        <SingleBanner imgPath="/images/banner/wallets.jpg" backgroundColor={"#fc532b"} url="#" key={nanoid()} />,
        <ProductList title="New In" subTitle="신규 등록 상품" theme="justDropped" key={nanoid()} />,
        <SingleBanner imgPath="/images/banner/luxury.jpg" backgroundColor={"#b7ae9f"} url="#" key={nanoid()} />,
        <ProductList title="Most_viewed Luxuries" subTitle="한 주간 클릭이 많았던 럭셔리" theme="justDropped" key={nanoid()} />,
        <SingleBanner imgPath="/images/banner/new_items.jpg" backgroundColor={"#d7dfe3"} url="#" key={nanoid()} />,
        <ProductList title="Numbering New Items" subTitle="넘버링 우먼 & 단독 상품" theme="justDropped" key={nanoid()} />,
        <SingleBanner imgPath="/images/banner/skate_board.jpg" backgroundColor={"#d1dbe3"} url="#" key={nanoid()} />,
        <ProductList title="Do a Kickflip!" subTitle="스케이트보드만의 자유로움" theme="justDropped" key={nanoid()} />,
        <SingleBanner imgPath="/images/banner/kenzo_by_nigo.jpg" backgroundColor={"#e8dcc7"} url="#" key={nanoid()} />,
        <ProductList title="Let's Nigo" subTitle="Nigo와 함께" theme="justDropped" key={nanoid()} />
    ];
    return (
        <div className={"recommendation_wrap"}>
            <Carousel />
            <Shortcut title={undefined} subTitle={undefined} theme="topList"/>
            <ProductList title="Just Dropped" subTitle="발매 상품" theme="justDropped"/>
            <Shortcut title="Brand Focus" subTitle="추천 브랜드" theme={"brandFocus"}/>
            {contents.map((content, index) => (
                content
            ))
            }
            {isFetching && hasNextPage &&
                <div className={"flex items-center w-full"}>
                    <Image src={"/images/gif/loading.gif"} alt={"loading"} width={200} height={200} quality={100}/>
                </div>}
            <BottomBanner />
        </div>
    )
}
export default Recommendation;