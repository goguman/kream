import Carousel from "../components/main/banners/Carousel";
import Shortcut from "../components/main/shortcuts/Shortcut";
import ProductList from "../components/main/products/ProductList";
import SingleBanner from "../components/main/banners/SingleBanner";
import BottomBanner from "../components/common/BottomBanner";
import {useCallback, useEffect, useState} from "react";
import {nanoid} from "@reduxjs/toolkit";
import axios from "axios";
import {PaginationResponse} from "./api/infinitescroll/PaginationResponse";
import Image from "next/image";

// const PAGE_SIZE = 4;

export default function Home() {
    const [page, setPage] = useState(0);
    const [from, setFrom] = useState(0);
    const [contents, setContents] = useState([]);
    const [isFetching, setFetching] = useState(false);
    const [hasNextPage, setNextPage] = useState(true);
    const contentsList = [
        <SingleBanner imgPath="/images/banner/sneakers.jpg" url="#" key={nanoid()} />,
        <ProductList title="Most Popular" subTitle="인기 상품" theme="justDropped" key={nanoid()} />,
        <SingleBanner imgPath="/images/banner/wallets.jpg" url="#" key={nanoid()} />,
        <ProductList title="New In" subTitle="신규 등록 상품" theme="justDropped" key={nanoid()} />,
        <SingleBanner imgPath="/images/banner/luxury.jpg" url="#" key={nanoid()} />,
        <ProductList title="Most_viewed Luxuries" subTitle="한 주간 클릭이 많았던 럭셔리" theme="justDropped" key={nanoid()} />,
        <SingleBanner imgPath="/images/banner/new_items.jpg" url="#" key={nanoid()} />,
        <ProductList title="Numbering New Items" subTitle="넘버링 우먼 & 단독 상품" theme="justDropped" key={nanoid()} />,
        <SingleBanner imgPath="/images/banner/skate_board.jpg" url="#" key={nanoid()} />,
        <ProductList title="Do a Kickflip!" subTitle="스케이트보드만의 자유로움" theme="justDropped" key={nanoid()} />,
        <SingleBanner imgPath="/images/banner/kenzo_by_nigo.jpg" url="#" key={nanoid()} />,
        <ProductList title="Let's Nigo" subTitle="Nigo와 함께" theme="justDropped" key={nanoid()} />
    ];

    const fetchContents = useCallback(async () => {
        // 관리자 페이지 만들 경우 axios 살리고 DB에서 컨텐츠 조회하기
        // const {data} = await axios.get<PaginationResponse<any>>('http://localhost:4000/fetchMainContents', {
        //     params: {page, size: PAGE_SIZE},
        // })
        // setContents(contents.concat(data));
        let nextContents;
        let to;
        to = from+4;
        // if(page == 1) {
        //     nextContents =
        //         <div key={page}>
        //             <SingleBanner imgPath="/images/banner/sneakers.jpg" url="#"/>
        //             <ProductList title="Most Popular" subTitle="인기 상품" theme="justDropped"/>
        //             <SingleBanner imgPath="/images/banner/wallets.jpg" url="#"/>
        //             <ProductList title="New In" subTitle="신규 등록 상품" theme="justDropped"/>
        //         </div>
        // } else if(page == 2) {
        //     nextContents =
        //         <div key={page}>
        //             <SingleBanner imgPath="/images/banner/luxury.jpg" url="#"/>
        //             <ProductList title="Most_viewed Luxuries" subTitle="한 주간 클릭이 많았던 럭셔리" theme="justDropped"/>
        //             <SingleBanner imgPath="/images/banner/new_items.jpg" url="#"/>
        //             <ProductList title="Numbering New Items" subTitle="넘버링 우먼 & 단독 상품" theme="justDropped"/>
        //         </div>
        // } else if(page == 3) {
        //     nextContents =
        //         <div key={page}>
        //             <SingleBanner imgPath="/images/banner/skate_board.jpg" url="#"/>
        //             <ProductList title="Do a Kickflip!" subTitle="스케이트보드만의 자유로움" theme="justDropped"/>
        //             <SingleBanner imgPath="/images/banner/kenzo_by_nigo.jpg" url="#"/>
        //             <ProductList title="Let's Nigo" subTitle="Nigo와 함께" theme="justDropped"/>
        //         </div>
        // }
        nextContents = contentsList.slice(from, to);
        setContents(contents.concat(nextContents));
        console.log("contents");
        console.log(from);
        console.log(nextContents);
        console.log(contents);
        // setPage(page + 1);
        setFrom(to);
        setNextPage(to < contentsList.length);
        // setNextPage(page<=3);
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

    return (
        <div className="break-keep pt-[96px] w-full">
            <Carousel />
            <Shortcut title={undefined} subTitle={undefined} theme="topList"/>
            <ProductList title="Just Dropped" subTitle="발매 상품" theme="justDropped"/>
            <Shortcut title="Brand Focus" subTitle="추천 브랜드" theme={"brandFocus"}/>
            {contents.map((content, index) => (
                content
            ))
            }
            {/*{isFetching && hasNextPage && <div>Loading...</div>}*/}
            {isFetching && hasNextPage && <div className={"flex items-center w-full"}><Image src={"/images/gif/loading.gif"} alt={"loading"}
                                                      width={200} height={200} quality={100}/></div>}
            <BottomBanner />
        </div>
    )
}
