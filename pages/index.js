import Carousel from "../components/main/banners/Carousel";
import Shortcut from "../components/main/shortcuts/Shortcut";
import ProductList from "../components/main/products/ProductList";
import SingleBanner from "../components/main/banners/SingleBanner";
export default function Home() {
    return (
        <div className="break-keep pt-[96px]">
            <Carousel />
            <Shortcut theme="topList"/>
            <ProductList title="Just Dropped" subTitle="발매 상품" theme="justDropped"/>
            <Shortcut title="Brand Focus" subTitle="추천 브랜드" theme="topList"/>
            <SingleBanner imgPath="/images/banner/best_apparel_collaboration_2022.jpg" url="#"/>
            <ProductList title="Most Popular" subTitle="인기 상품" theme="justDropped"/>
            <SingleBanner imgPath="/images/banner/best_accessory_2022.jpg" url="#"/>
            <ProductList title="New In" subTitle="신규 등록 상품" theme="justDropped"/>
            <SingleBanner imgPath="/images/banner/best_tech_2022.jpg" url="#"/>
            <ProductList title="Upcoming Release" subTitle="발매 예정" theme="justDropped"/>
        </div>
    )
}
