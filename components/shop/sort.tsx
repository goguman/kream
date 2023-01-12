import Image from "next/image";


const sort = () => {
    return(
        <ul className="block overflow-hidden absolute top-7 right-0 w-[278px] bg-[#fff] border border-solid border-[#ebebeb] z-10">
            <li className="list-item text-justify">
                <a href="#" className="relative block py-[12px] pl-[16px] pr-[36px]">
                    <div className="block">
                        <p className="text-[14px] text-[#222] font-bold	tracking-[-.21px]">인기순</p>
                        <p className="pt-[4px] text-[12px] text-[rgba(34,34,34,.5)] tracking-[-.06px]">많이 판매된 순서대로 정렬합니다.</p>
                    </div>
                </a>
            </li>
            <li className="list-item text-justify">
                <a href="#" className="relative block py-[12px] pl-[16px] pr-[36px]">
                    <div className="block">
                        <p className="text-[14px] text-[#222] tracking-[-.21px]">프리미엄순</p>
                        <p className="pt-[4px] text-[12px] text-[rgba(34,34,34,.5)] tracking-[-.06px]">발매가 대비 가격이 높은 순서대로 정렬합니다.</p>
                    </div>
                </a>
            </li>
            <li className="list-item text-justify">
                <a href="#" className="relative block py-[12px] pl-[16px] pr-[36px]">
                    <div className="block">
                        <p className="text-[14px] text-[#222] tracking-[-.21px]">즉시 구매가순</p>
                        <p className="pt-[4px] text-[12px] text-[rgba(34,34,34,.5)] tracking-[-.06px]">즉시 구매가가 낮은 순서대로 정렬합니다.</p>
                    </div>
                </a>
            </li>
            <li className="list-item text-justify">
                <a href="#" className="relative block py-[12px] pl-[16px] pr-[36px]">
                    <div className="block">
                        <p className="text-[14px] text-[#222] tracking-[-.21px]">즉시 판매가순</p>
                        <p className="pt-[4px] text-[12px] text-[rgba(34,34,34,.5)] tracking-[-.06px]">즉시 판매가가 높은 순서대로 정렬합니다.</p>
                    </div>
                </a>
            </li>
            <li className="list-item text-justify">
                <a href="#" className="relative block py-[12px] pl-[16px] pr-[36px]">
                    <div className="block">
                        <p className="text-[14px] text-[#222] tracking-[-.21px]">발매일순</p>
                        <p className="pt-[4px] text-[12px] text-[rgba(34,34,34,.5)] tracking-[-.06px]">최신 상품 순서대로 정렬합니다. 아직 발매 전인 상품이 노출될 수 있습니다.</p>
                    </div>
                </a>
            </li>
        </ul>
    )
}
export default sort;