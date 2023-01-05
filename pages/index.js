import Carousel from "../components/main/banners/Carousel";
import Shortcut from "../components/main/shortcuts/Shortcut";
import ProductList from "../components/main/products/ProductList";
import SingleBanner from "../components/main/banners/SingleBanner";
import BottomBanner from "../components/common/BottomBanner";
export default function Home() {
    return (
        <div className="break-keep pt-[96px]">
            <Carousel />
            <Shortcut theme="topList"/>
            <ProductList title="Just Dropped" subTitle="발매 상품" theme="justDropped"/>
            <Shortcut title="Brand Focus" subTitle="추천 브랜드"/>
            <SingleBanner imgPath="/images/banner/sneakers.jpg" url="#"/>
            <ProductList title="Most Popular" subTitle="인기 상품" theme="justDropped"/>
            <SingleBanner imgPath="/images/banner/wallets.jpg" url="#"/>
            <ProductList title="New In" subTitle="신규 등록 상품" theme="justDropped"/>
            <SingleBanner imgPath="/images/banner/luxury.jpg" url="#"/>
            <ProductList title="Most_viewed Luxuries" subTitle="한 주간 클릭이 많았던 럭셔리" theme="justDropped"/>
            <SingleBanner imgPath="/images/banner/new_items.jpg" url="#"/>
            <ProductList title="Numbering New Items" subTitle="넘버링 우먼 & 단독 상품" theme="justDropped"/>
            <BottomBanner />
        </div>
    )
}
