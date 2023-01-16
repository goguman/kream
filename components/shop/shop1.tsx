import Image from "next/image";
import { useState } from "react";
import Cate from "./cate";
import Brand from "./brand";
import Gender from "./gender";
import Collection from "./collection";
import ShoesSize from "./shoesSize";
import ClothesSize from "./clothesSize";
import Price from "./price";
import Sort from "./sort";


const shop1 = () => {
    const [cateVisible, setCateVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [genderVisible, setGenderVisible] = useState(false);
    const [priceVisible, setPriceVisible] = useState(false);
    const [collectionVisible, setCollectionVisible] = useState(false);
    const [shoesSizeVisible, setShoesSizeVisible] = useState(false);
    const [clothesSizeVisible, setClothesSizeVisible] = useState(false);
    const [sortVisible, setSortVisible] = useState(false);
    return (
        <div className="md:container md:mx-auto flex py-[90px]">
        <div className=" py-16 text-center w-screen overflow-hidden	">
            <h1 className="font-black text-3xl">SHOP</h1>
            <div className="flex max-w-[1200px] w-[auto] mx-auto my-0 ">
                <div className="bg-filter-color h-[38px] p-[10px] leading-4	rounded-xl mr-2 mt-2">
                    <a href="#">
                        <Image className="w-[20px] h-[20px]" src="/images/filter.png" alt="jordan" quality={100} width={1024} height={1024}/>
                    </a>
                </div>
                <div className="after:absolute after:h-8 after:ml-[20px] after:mt-[-8px] after:w-px after:bg-[#ebebeb] bg-filter-color h-[38px] p-[10px] leading-4	rounded-xl mr-5 mt-2">럭셔리</div>
                <div className="bg-filter-color h-[38px] p-[10px] leading-4	rounded-xl mr-2 mt-2">신발</div>
                <div className="bg-filter-color h-[38px] p-[10px] leading-4	rounded-xl mr-2 mt-2">의류</div>
                <div className="bg-filter-color h-[38px] p-[10px] leading-4	rounded-xl mr-2 mt-2">패션잡화</div>
                <div className="bg-filter-color h-[38px] p-[10px] leading-4	rounded-xl mr-2 mt-2">라이프</div>
                <div className="bg-filter-color h-[38px] p-[10px] leading-4	rounded-xl mr-2 mt-2">테크</div>
            </div>
            <div className="flex max-w-[1280px] w-max mx-auto my-0 px-[20px]">
                <ul className="min-h-[98px]">
                    <li className="float-left">
                        <a href="#" className="w-full p-2 w-[86px] h-[84px] block">
                            <Image className="rounded-2xl mx-auto" src="/images/jordan01.png" alt="jordan" quality={100} width={70} height={70}/>
                            <p className="mt-[-2px] text-[13px] font-semibold ">조던</p>
                        </a>
                    </li>
                    <li className="float-left ml-[40px]">
                        <a href="#" className="w-full p-2 w-[86px] h-[84px] block">
                            <Image className="rounded-2xl mx-auto" src="/images/jordan01.png" alt="jordan" quality={100} width={70} height={70}/>
                            <p className="mt-[-2px] text-[13px] font-semibold">조던</p>
                        </a>
                    </li>
                    <li className="float-left ml-[40px]">
                        <a href="#" className="w-full p-2 w-[86px] h-[84px] block">
                            <Image className="rounded-2xl mx-auto" src="/images/jordan01.png" alt="jordan" quality={100} width={70} height={70}/>
                            <p className="mt-[-2px] text-[13px] font-semibold">조던</p>
                        </a>
                    </li>
                    <li className="float-left ml-[40px]">
                        <a href="#" className="w-full p-2 w-[86px] h-[84px] block">
                            <Image className="rounded-2xl mx-auto" src="/images/jordan01.png" alt="jordan" quality={100} width={70} height={70}/>
                            <p className="mt-[-2px] text-[13px] font-semibold">조던</p>
                        </a>
                    </li>
                    <li className="float-left ml-[40px]">
                        <a href="#" className="w-full p-2 w-[86px] h-[84px] block">
                            <Image className="rounded-2xl mx-auto" src="/images/jordan01.png" alt="jordan" quality={100} width={70} height={70}/>
                            <p className="mt-[-2px] text-[13px] font-semibold">조던</p>
                        </a>
                    </li>
                    <li className="float-left ml-[40px]">
                        <a href="#" className="w-full p-2 w-[86px] h-[84px] block">
                            <Image className="rounded-2xl mx-auto" src="/images/jordan01.png" alt="jordan" quality={100} width={70} height={70}/>
                            <p className="mt-[-2px] text-[13px] font-semibold">조던</p>
                        </a>
                    </li>
                    <li className="float-left ml-[40px]">
                        <a href="#" className="w-full p-2 w-[86px] h-[84px] block">
                            <Image className="rounded-2xl mx-auto" src="/images/jordan01.png" alt="jordan" quality={100} width={70} height={70}/>
                            <p className="mt-[-2px] text-[13px] font-semibold">조던</p>
                        </a>
                    </li>
                    <li className="float-left ml-[40px]">
                        <a href="#" className="w-full p-2 w-[86px] h-[84px] block">
                            <Image className="rounded-2xl mx-auto" src="/images/jordan01.png" alt="jordan" quality={100} width={70} height={70}/>
                            <p className="mt-[-2px] text-[13px] font-semibold">조던</p>
                        </a>
                    </li>
                    <li className="float-left ml-[40px]">
                        <a href="#" className="w-full p-2 w-[86px] h-[84px] block">
                            <Image className="rounded-2xl mx-auto" src="/images/jordan01.png" alt="jordan" quality={100} width={70} height={70}/>
                            <p className="mt-[-2px] text-[13px] font-semibold">조던</p>
                        </a>
                    </li>
                    <li className="float-left ml-[40px]">
                        <a href="#" className="w-full p-2 w-[86px] h-[84px] block">
                            <Image className="rounded-2xl mx-auto" src="/images/jordan01.png" alt="jordan" quality={100} width={70} height={70}/>
                            <p className="mt-[-2px] text-[13px] font-semibold">조던</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex max-w-[1280px] w-max mx-[auto] my-0 px-[40px] pb-[80px] pt-[0]">
                <div className="w-[210px] mr-[10px] pr-[10px] overflow-x-hidden overflow-y-auto">
                    <div className="flex items-center pt-[23px] pb-[15px]">
                        <div className="flex items-center">
                            <span className="text-[14px] tracking-[-.21px] font-bold">필터</span>
                        </div>
                    </div>
                    <div className="border-b border-solid border-[#ebebeb]">
                        <div className="flex items-center pt-[0px] pb-[14px] justify-between cursor-pointer" onClick={()=> {setCateVisible(!cateVisible);}}>
                            <div className="flex pt-[16px]">
                                <div className="flex flex-col max-w-[calc(100% - 30px)]">
                                    <span className="text-[13px] relative tracking-[-.07px] font-semibold text-left	">카테고리</span>
                                    {!cateVisible && <span className="pt-[4px] text-ellipsis	whitespace-nowrap text-[15px] tracking-[-.15px] text-[rgba(34,34,34,.5)]">모든 카테고리</span>}                                    
                                </div>
                            </div>
                            <div className="h-[20px] text-right">
                                {cateVisible && <Image className="rounded-2xl mx-auto" src="/images/minus.png" alt="plus" quality={100} width={28} height={28} style={{ opacity: 0.5 }}/>}
                                {!cateVisible && <Image className="rounded-2xl mx-auto" src="/images/plusimg.png" alt="plus" quality={100} width={28} height={28} style={{ opacity: 0.5 }}/>}                                
                            </div>
                        </div>
                        {cateVisible && <Cate />}
                    </div>
                    <div className="border-b border-solid border-[#ebebeb]">
                        <div className="flex items-center pt-[0px] pb-[14px] justify-between cursor-pointer" onClick={()=> {setBrandVisible(!brandVisible);}}>
                            <div className="flex pt-[16px]">
                                <div className="flex flex-col max-w-[calc(100% - 30px)]">
                                    <span className="text-[13px] relative tracking-[-.07px] font-semibold text-left	">브랜드</span>
                                    {!brandVisible && <span className="pt-[4px] text-ellipsis	whitespace-nowrap text-[15px] tracking-[-.15px] text-[rgba(34,34,34,.5)]">모든 브랜드</span>}                                    
                                </div>
                            </div>
                            <div className="h-[20px] text-right">
                                {brandVisible && <Image className="rounded-2xl mx-auto" src="/images/minus.png" alt="plus" quality={100} width={28} height={28} style={{ opacity: 0.5 }}/>}
                                {!brandVisible && <Image className="rounded-2xl mx-auto" src="/images/plusimg.png" alt="plus" quality={100} width={28} height={28} style={{ opacity: 0.5 }}/>}
                            </div>
                        </div>
                        {brandVisible && <Brand />}            
                    </div>
                    <div className="border-b border-solid border-[#ebebeb]">
                        <div className="flex items-center pt-[0px] pb-[14px] justify-between cursor-pointer" onClick={()=> {setGenderVisible(!genderVisible);}}>
                            <div className="flex pt-[16px]">
                                <div className="flex flex-col max-w-[calc(100% - 30px)]">
                                    <span className="text-[13px] relative tracking-[-.07px] font-semibold text-left	">성별</span>
                                    {!genderVisible && <span className="pt-[4px] text-ellipsis	whitespace-nowrap text-[15px] tracking-[-.15px] text-[rgba(34,34,34,.5)]">모든 성별</span>}                                    
                                </div>
                            </div>
                            <div className="h-[20px] text-right">
                                {genderVisible && <Image className="rounded-2xl mx-auto" src="/images/minus.png" alt="plus" quality={100} width={28} height={28} style={{ opacity: 0.5 }}/>}
                                {!genderVisible && <Image className="rounded-2xl mx-auto" src="/images/plusimg.png" alt="plus" quality={100} width={28} height={28} style={{ opacity: 0.5 }}/>}
                            </div>
                        </div>
                        {genderVisible && <Gender />}            
                    </div>
                    <div className="border-b border-solid border-[#ebebeb]">
                        <div className="flex items-center pt-[0px] pb-[14px] justify-between cursor-pointer" onClick={()=> {setCollectionVisible(!collectionVisible);}}>
                            <div className="flex pt-[16px]">
                                <div className="flex flex-col max-w-[calc(100% - 30px)]">
                                    <span className="text-[13px] relative tracking-[-.07px] font-semibold text-left	">컬렉션</span>
                                    {!collectionVisible && <span className="pt-[4px] text-ellipsis	whitespace-nowrap text-[15px] tracking-[-.15px] text-[rgba(34,34,34,.5)]">모든 컬렉션</span>}
                                </div>
                            </div>
                            <div className="h-[20px] text-right">
                                {collectionVisible && <Image className="rounded-2xl mx-auto" src="/images/minus.png" alt="plus" quality={100} width={28} height={28} style={{ opacity: 0.5 }}/>}
                                {!collectionVisible && <Image className="rounded-2xl mx-auto" src="/images/plusimg.png" alt="plus" quality={100} width={28} height={28} style={{ opacity: 0.5 }}/>}
                            </div>
                        </div>
                        {collectionVisible && <Collection />}
                    </div>
                    <div className="border-b border-solid border-[#ebebeb]">
                        <div className="flex items-center pt-[0px] pb-[14px] justify-between cursor-pointer" onClick={()=> {setShoesSizeVisible(!shoesSizeVisible);}}>    
                            <div className="flex pt-[16px]">
                                <div className="flex flex-col max-w-[calc(100% - 30px)]">
                                    <span className="text-[13px] relative tracking-[-.07px] font-semibold text-left	">신발 사이즈</span>
                                    {!shoesSizeVisible && <span className="pt-[4px] text-ellipsis	whitespace-nowrap text-[15px] tracking-[-.15px] text-[rgba(34,34,34,.5)]">모든 사이즈</span>}
                                </div>
                            </div>
                            <div className="h-[20px] text-right">
                                {shoesSizeVisible && <Image className="rounded-2xl mx-auto" src="/images/minus.png" alt="plus" quality={100} width={28} height={28} style={{ opacity: 0.5 }}/>}
                                {!shoesSizeVisible && <Image className="rounded-2xl mx-auto" src="/images/plusimg.png" alt="plus" quality={100} width={28} height={28} style={{ opacity: 0.5 }}/>}
                            </div>
                        </div>
                        {shoesSizeVisible && <ShoesSize />}
                    </div>
                    <div className="border-b border-solid border-[#ebebeb]">
                        <div className="flex items-center pt-[0px] pb-[14px] justify-between cursor-pointer" onClick={()=> {setClothesSizeVisible(!clothesSizeVisible);}}>
                            <div className="flex pt-[16px]">
                                <div className="flex flex-col max-w-[calc(100% - 30px)]">
                                    <span className="text-[13px] relative tracking-[-.07px] font-semibold text-left	">의류</span>
                                    {!clothesSizeVisible && <span className="pt-[4px] text-ellipsis	whitespace-nowrap text-[15px] tracking-[-.15px] text-[rgba(34,34,34,.5)]">모든 사이즈</span>}
                                </div>
                            </div>
                            <div className="h-[20px] text-right">
                                {clothesSizeVisible && <Image className="rounded-2xl mx-auto" src="/images/minus.png" alt="plus" quality={100} width={28} height={28} style={{ opacity: 0.5 }}/>}
                                {!clothesSizeVisible && <Image className="rounded-2xl mx-auto" src="/images/plusimg.png" alt="plus" quality={100} width={28} height={28} style={{ opacity: 0.5 }}/>}
                            </div>
                        </div>
                        {clothesSizeVisible && <ClothesSize />}
                    </div>
                    <div className="border-b border-solid border-[#ebebeb]">
                        <div className="flex items-center pt-[0px] pb-[14px] justify-between cursor-pointer" onClick={()=> {setPriceVisible(!priceVisible);}}>
                            <div className="flex pt-[16px]">
                                <div className="flex flex-col max-w-[calc(100% - 30px)]">
                                    <span className="text-[13px] relative tracking-[-.07px] font-semibold text-left	">가격</span>
                                    {!priceVisible && <span className="pt-[4px] text-ellipsis	whitespace-nowrap text-[15px] tracking-[-.15px] text-[rgba(34,34,34,.5)]">모든 가격</span>}
                                </div>
                            </div>
                            <div className="h-[20px] text-right">
                                {priceVisible && <Image className="rounded-2xl mx-auto" src="/images/minus.png" alt="plus" quality={100} width={28} height={28} style={{ opacity: 0.5 }}/>}
                                {!priceVisible && <Image className="rounded-2xl mx-auto" src="/images/plusimg.png" alt="plus" quality={100} width={28} height={28} style={{ opacity: 0.5 }}/>}
                            </div>
                        </div>
                        {priceVisible && <Price />}
                    </div>
                </div>
                <div className="flex-[1] block m-[0] p-[0]">
                    <div className="flex items-center h-[68px] justify-between ">
                        <div className="flex m-[0] p-[0]">
                            <div className="block mt-[1px] p=[0]">
                                <a href="#" className="block inline-flex items-center h-[28px] pl-[9px] pr-[9px] border border-solid border-[#ebebeb] rounded-[17px]">
                                    <span className="leading-5 ml-[3px] tracking-[normal] text-[13px]"> 브랜드 배송</span>
                                </a>
                            </div>
                        </div>
                        <div className="block m-[0] p-[0]">
                            <div className="relative m-[0] p-[0]">
                                <button className="flex items-center cursor-pointer text-[14px] tracking-[-.21px] font-semibold	after:inline-flex after:ml-[4px] after:w-[16px] after:h-[16px] after:bg-[url('/images/updown.png')] after:bg-contain" onClick={()=> {setSortVisible(!sortVisible);}}>인기순</button>
                                {sortVisible && <Sort />}
                            </div> 
                        </div>
                    </div>
                    <div ></div>
                    <div className="block">
                        <div className="grid grid-cols-4 gap-x-5 gap-y-10">
                            <div className="flex flex-col relative">
                                <a href="#" className="flex flex-col">
                                    <div className="bg-[#f4f4f4] rounded-[10px] overflow-hidden	relative pt-[100%]">
                                        <Image className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-full h-auto" alt="catebox" src="/images/rolex.png" quality={100} width={1120} height={1120} />                                    
                                    </div>
                                    <div className="pl-[4px] pr-[4px] flex-1 pt-[8px]">
                                        <div className="box-border">
                                            <p className="mb-[2px] flex items-center leading-[16px] text-[13px] tracking-[-.07px] font-bold	text-[#333]">Rolex</p>
                                            <div className="box-border">
                                                <p className="overflow-hidden text-ellipsis leading-[16px] text-[13px] font-medium text-left">Rolex Day-Date 40 Chocolate Roman 228235 (Fluted/President)</p>
                                                <p className="overflow-hidden text-ellipsis leading-[13px] mt-[2px] text-[11px] text-[rgba(34,34,34,.5)] text-left">롤렉스 데이데이트 40 초콜릿 로만 228235 (플루티드/프레지던트)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-border pl-[4px] pr-[4px] pt-[12px]">
                                        <p className="leading-[17px] text-[14px] font-bold text-left">70,000,000원</p>
                                        <p className="mt-[2px] leading-[13px] text-[11px] text-[rgba(34,34,34,.5)] text-left">즉시 판매가</p>
                                    </div>
                                </a>
                                <div className="pl-[4px] pr-[4px] flex pt-[8px] gap-x-3">
                                    <span className="inline-flex items-center box-border">
                                        <span className="flex h-[inherit] cursor-pointer opacity-50">
                                            <Image className="w-[18px] h-[14px]" alt="catebox" src="/images/bookmark.png" quality={100} width={512} height={512} />
                                        </span>
                                        <span className="ml-[1px] text-[rgba(34,34,34,.5)] text-[12px] tracking-[-.06px] box-border">30</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <a href="#" className="flex flex-col">
                                    <div className="bg-[#f4f4f4] rounded-[10px] overflow-hidden	relative pt-[100%]">
                                        <Image className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-full h-auto" alt="catebox" src="/images/asics.png" quality={100} width={1120} height={1120} />                                    
                                    </div>
                                    <div className="pl-[4px] pr-[4px] flex-1 pt-[8px]">
                                        <div className="box-border">
                                            <p className="mb-[2px] flex items-center leading-[16px] text-[13px] tracking-[-.07px] font-bold	text-[#333]">Asics</p>
                                            <div className="box-border">
                                                <p className="overflow-hidden text-ellipsis leading-[16px] text-[13px] font-medium text-left">Asics x Andersson Bell Gel-Sonoma 15-50 Black Green</p>
                                                <p className="overflow-hidden text-ellipsis leading-[13px] mt-[2px] text-[11px] text-[rgba(34,34,34,.5)] text-left">아식스 x 앤더슨벨 젤 소노마 15-50 블랙 그린</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-border pl-[4px] pr-[4px] pt-[12px]">
                                        <p className="leading-[17px] text-[14px] font-bold text-left">237,000원</p>
                                        <p className="mt-[2px] leading-[13px] text-[11px] text-[rgba(34,34,34,.5)] text-left">즉시 판매가</p>
                                    </div>
                                </a>
                                <div className="pl-[4px] pr-[4px] flex pt-[8px] gap-x-3">
                                    <span className="inline-flex items-center box-border">
                                        <span className="flex h-[inherit] cursor-pointer opacity-50">
                                            <Image className="w-[18px] h-[14px]" alt="catebox" src="/images/bookmark.png" quality={100} width={512} height={512} />
                                        </span>
                                        <span className="ml-[1px] text-[rgba(34,34,34,.5)] text-[12px] tracking-[-.06px] box-border">30</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <a href="#" className="flex flex-col">
                                    <div className="bg-[#f4f4f4] rounded-[10px] overflow-hidden	relative pt-[100%]">
                                        <Image className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-full h-auto" alt="catebox" src="/images/rolex.png" quality={100} width={1120} height={1120} />                                    
                                    </div>
                                    <div className="pl-[4px] pr-[4px] flex-1 pt-[8px]">
                                        <div className="box-border">
                                            <p className="mb-[2px] flex items-center leading-[16px] text-[13px] tracking-[-.07px] font-bold	text-[#333]">Rolex</p>
                                            <div className="box-border">
                                                <p className="overflow-hidden text-ellipsis leading-[16px] text-[13px] font-medium text-left">Rolex Day-Date 40 Chocolate Roman 228235 (Fluted/President)</p>
                                                <p className="overflow-hidden text-ellipsis leading-[13px] mt-[2px] text-[11px] text-[rgba(34,34,34,.5)] text-left">롤렉스 데이데이트 40 초콜릿 로만 228235 (플루티드/프레지던트)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-border pl-[4px] pr-[4px] pt-[12px]">
                                        <p className="leading-[17px] text-[14px] font-bold text-left">70,000,000원</p>
                                        <p className="mt-[2px] leading-[13px] text-[11px] text-[rgba(34,34,34,.5)] text-left">즉시 판매가</p>
                                    </div>
                                </a>
                                <div className="pl-[4px] pr-[4px] flex pt-[8px] gap-x-3">
                                    <span className="inline-flex items-center box-border">
                                        <span className="flex h-[inherit] cursor-pointer opacity-50">
                                            <Image className="w-[18px] h-[14px]" alt="catebox" src="/images/bookmark.png" quality={100} width={512} height={512} />
                                        </span>
                                        <span className="ml-[1px] text-[rgba(34,34,34,.5)] text-[12px] tracking-[-.06px] box-border">30</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <a href="#" className="flex flex-col">
                                    <div className="bg-[#f4f4f4] rounded-[10px] overflow-hidden	relative pt-[100%]">
                                        <Image className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-full h-auto" alt="catebox" src="/images/asics.png" quality={100} width={1120} height={1120} />                                    
                                    </div>
                                    <div className="pl-[4px] pr-[4px] flex-1 pt-[8px]">
                                        <div className="box-border">
                                            <p className="mb-[2px] flex items-center leading-[16px] text-[13px] tracking-[-.07px] font-bold	text-[#333]">Asics</p>
                                            <div className="box-border">
                                                <p className="overflow-hidden text-ellipsis leading-[16px] text-[13px] font-medium text-left">Asics x Andersson Bell Gel-Sonoma 15-50 Black Green</p>
                                                <p className="overflow-hidden text-ellipsis leading-[13px] mt-[2px] text-[11px] text-[rgba(34,34,34,.5)] text-left">아식스 x 앤더슨벨 젤 소노마 15-50 블랙 그린</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-border pl-[4px] pr-[4px] pt-[12px]">
                                        <p className="leading-[17px] text-[14px] font-bold text-left">237,000원</p>
                                        <p className="mt-[2px] leading-[13px] text-[11px] text-[rgba(34,34,34,.5)] text-left">즉시 판매가</p>
                                    </div>
                                </a>
                                <div className="pl-[4px] pr-[4px] flex pt-[8px] gap-x-3">
                                    <span className="inline-flex items-center box-border">
                                        <span className="flex h-[inherit] cursor-pointer opacity-50">
                                            <Image className="w-[18px] h-[14px]" alt="catebox" src="/images/bookmark.png" quality={100} width={512} height={512} />
                                        </span>
                                        <span className="ml-[1px] text-[rgba(34,34,34,.5)] text-[12px] tracking-[-.06px] box-border">30</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <a href="#" className="flex flex-col">
                                    <div className="bg-[#f4f4f4] rounded-[10px] overflow-hidden	relative pt-[100%]">
                                        <Image className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-full h-auto" alt="catebox" src="/images/asics.png" quality={100} width={1120} height={1120} />                                    
                                    </div>
                                    <div className="pl-[4px] pr-[4px] flex-1 pt-[8px]">
                                        <div className="box-border">
                                            <p className="mb-[2px] flex items-center leading-[16px] text-[13px] tracking-[-.07px] font-bold	text-[#333]">Asics</p>
                                            <div className="box-border">
                                                <p className="overflow-hidden text-ellipsis leading-[16px] text-[13px] font-medium text-left">Asics x Andersson Bell Gel-Sonoma 15-50 Black Green</p>
                                                <p className="overflow-hidden text-ellipsis leading-[13px] mt-[2px] text-[11px] text-[rgba(34,34,34,.5)] text-left">아식스 x 앤더슨벨 젤 소노마 15-50 블랙 그린</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-border pl-[4px] pr-[4px] pt-[12px]">
                                        <p className="leading-[17px] text-[14px] font-bold text-left">237,000원</p>
                                        <p className="mt-[2px] leading-[13px] text-[11px] text-[rgba(34,34,34,.5)] text-left">즉시 판매가</p>
                                    </div>
                                </a>
                                <div className="pl-[4px] pr-[4px] flex pt-[8px] gap-x-3">
                                    <span className="inline-flex items-center box-border">
                                        <span className="flex h-[inherit] cursor-pointer opacity-50">
                                            <Image className="w-[18px] h-[14px]" alt="catebox" src="/images/bookmark.png" quality={100} width={512} height={512} />
                                        </span>
                                        <span className="ml-[1px] text-[rgba(34,34,34,.5)] text-[12px] tracking-[-.06px] box-border">30</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <a href="#" className="flex flex-col">
                                    <div className="bg-[#f4f4f4] rounded-[10px] overflow-hidden	relative pt-[100%]">
                                        <Image className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-full h-auto" alt="catebox" src="/images/rolex.png" quality={100} width={1120} height={1120} />                                    
                                    </div>
                                    <div className="pl-[4px] pr-[4px] flex-1 pt-[8px]">
                                        <div className="box-border">
                                            <p className="mb-[2px] flex items-center leading-[16px] text-[13px] tracking-[-.07px] font-bold	text-[#333]">Rolex</p>
                                            <div className="box-border">
                                                <p className="overflow-hidden text-ellipsis leading-[16px] text-[13px] font-medium text-left">Rolex Day-Date 40 Chocolate Roman 228235 (Fluted/President)</p>
                                                <p className="overflow-hidden text-ellipsis leading-[13px] mt-[2px] text-[11px] text-[rgba(34,34,34,.5)] text-left">롤렉스 데이데이트 40 초콜릿 로만 228235 (플루티드/프레지던트)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-border pl-[4px] pr-[4px] pt-[12px]">
                                        <p className="leading-[17px] text-[14px] font-bold text-left">70,000,000원</p>
                                        <p className="mt-[2px] leading-[13px] text-[11px] text-[rgba(34,34,34,.5)] text-left">즉시 판매가</p>
                                    </div>
                                </a>
                                <div className="pl-[4px] pr-[4px] flex pt-[8px] gap-x-3">
                                    <span className="inline-flex items-center box-border">
                                        <span className="flex h-[inherit] cursor-pointer opacity-50">
                                            <Image className="w-[18px] h-[14px]" alt="catebox" src="/images/bookmark.png" quality={100} width={512} height={512} />
                                        </span>
                                        <span className="ml-[1px] text-[rgba(34,34,34,.5)] text-[12px] tracking-[-.06px] box-border">30</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <a href="#" className="flex flex-col">
                                    <div className="bg-[#f4f4f4] rounded-[10px] overflow-hidden	relative pt-[100%]">
                                        <Image className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-full h-auto" alt="catebox" src="/images/asics.png" quality={100} width={1120} height={1120} />                                    
                                    </div>
                                    <div className="pl-[4px] pr-[4px] flex-1 pt-[8px]">
                                        <div className="box-border">
                                            <p className="mb-[2px] flex items-center leading-[16px] text-[13px] tracking-[-.07px] font-bold	text-[#333]">Asics</p>
                                            <div className="box-border">
                                                <p className="overflow-hidden text-ellipsis leading-[16px] text-[13px] font-medium text-left">Asics x Andersson Bell Gel-Sonoma 15-50 Black Green</p>
                                                <p className="overflow-hidden text-ellipsis leading-[13px] mt-[2px] text-[11px] text-[rgba(34,34,34,.5)] text-left">아식스 x 앤더슨벨 젤 소노마 15-50 블랙 그린</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-border pl-[4px] pr-[4px] pt-[12px]">
                                        <p className="leading-[17px] text-[14px] font-bold text-left">237,000원</p>
                                        <p className="mt-[2px] leading-[13px] text-[11px] text-[rgba(34,34,34,.5)] text-left">즉시 판매가</p>
                                    </div>
                                </a>
                                <div className="pl-[4px] pr-[4px] flex pt-[8px] gap-x-3">
                                    <span className="inline-flex items-center box-border">
                                        <span className="flex h-[inherit] cursor-pointer opacity-50">
                                            <Image className="w-[18px] h-[14px]" alt="catebox" src="/images/bookmark.png" quality={100} width={512} height={512} />
                                        </span>
                                        <span className="ml-[1px] text-[rgba(34,34,34,.5)] text-[12px] tracking-[-.06px] box-border">30</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <a href="#" className="flex flex-col">
                                    <div className="bg-[#f4f4f4] rounded-[10px] overflow-hidden	relative pt-[100%]">
                                        <Image className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-full h-auto" alt="catebox" src="/images/rolex.png" quality={100} width={1120} height={1120} />                                    
                                    </div>
                                    <div className="pl-[4px] pr-[4px] flex-1 pt-[8px]">
                                        <div className="box-border">
                                            <p className="mb-[2px] flex items-center leading-[16px] text-[13px] tracking-[-.07px] font-bold	text-[#333]">Rolex</p>
                                            <div className="box-border">
                                                <p className="overflow-hidden text-ellipsis leading-[16px] text-[13px] font-medium text-left">Rolex Day-Date 40 Chocolate Roman 228235 (Fluted/President)</p>
                                                <p className="overflow-hidden text-ellipsis leading-[13px] mt-[2px] text-[11px] text-[rgba(34,34,34,.5)] text-left">롤렉스 데이데이트 40 초콜릿 로만 228235 (플루티드/프레지던트)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-border pl-[4px] pr-[4px] pt-[12px]">
                                        <p className="leading-[17px] text-[14px] font-bold text-left">70,000,000원</p>
                                        <p className="mt-[2px] leading-[13px] text-[11px] text-[rgba(34,34,34,.5)] text-left">즉시 판매가</p>
                                    </div>
                                </a>
                                <div className="pl-[4px] pr-[4px] flex pt-[8px] gap-x-3">
                                    <span className="inline-flex items-center box-border">
                                        <span className="flex h-[inherit] cursor-pointer opacity-50">
                                            <Image className="w-[18px] h-[14px]" alt="catebox" src="/images/bookmark.png" quality={100} width={512} height={512} />
                                        </span>
                                        <span className="ml-[1px] text-[rgba(34,34,34,.5)] text-[12px] tracking-[-.06px] box-border">30</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <a href="#" className="flex flex-col">
                                    <div className="bg-[#f4f4f4] rounded-[10px] overflow-hidden	relative pt-[100%]">
                                        <Image className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-full h-auto" alt="catebox" src="/images/rolex.png" quality={100} width={1120} height={1120} />                                    
                                    </div>
                                    <div className="pl-[4px] pr-[4px] flex-1 pt-[8px]">
                                        <div className="box-border">
                                            <p className="mb-[2px] flex items-center leading-[16px] text-[13px] tracking-[-.07px] font-bold	text-[#333]">Rolex</p>
                                            <div className="box-border">
                                                <p className="overflow-hidden text-ellipsis leading-[16px] text-[13px] font-medium text-left">Rolex Day-Date 40 Chocolate Roman 228235 (Fluted/President)</p>
                                                <p className="overflow-hidden text-ellipsis leading-[13px] mt-[2px] text-[11px] text-[rgba(34,34,34,.5)] text-left">롤렉스 데이데이트 40 초콜릿 로만 228235 (플루티드/프레지던트)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-border pl-[4px] pr-[4px] pt-[12px]">
                                        <p className="leading-[17px] text-[14px] font-bold text-left">70,000,000원</p>
                                        <p className="mt-[2px] leading-[13px] text-[11px] text-[rgba(34,34,34,.5)] text-left">즉시 판매가</p>
                                    </div>
                                </a>
                                <div className="pl-[4px] pr-[4px] flex pt-[8px] gap-x-3">
                                    <span className="inline-flex items-center box-border">
                                        <span className="flex h-[inherit] cursor-pointer opacity-50">
                                            <Image className="w-[18px] h-[14px]" alt="catebox" src="/images/bookmark.png" quality={100} width={512} height={512} />
                                        </span>
                                        <span className="ml-[1px] text-[rgba(34,34,34,.5)] text-[12px] tracking-[-.06px] box-border">30</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <a href="#" className="flex flex-col">
                                    <div className="bg-[#f4f4f4] rounded-[10px] overflow-hidden	relative pt-[100%]">
                                        <Image className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-full h-auto" alt="catebox" src="/images/asics.png" quality={100} width={1120} height={1120} />                                    
                                    </div>
                                    <div className="pl-[4px] pr-[4px] flex-1 pt-[8px]">
                                        <div className="box-border">
                                            <p className="mb-[2px] flex items-center leading-[16px] text-[13px] tracking-[-.07px] font-bold	text-[#333]">Asics</p>
                                            <div className="box-border">
                                                <p className="overflow-hidden text-ellipsis leading-[16px] text-[13px] font-medium text-left">Asics x Andersson Bell Gel-Sonoma 15-50 Black Green</p>
                                                <p className="overflow-hidden text-ellipsis leading-[13px] mt-[2px] text-[11px] text-[rgba(34,34,34,.5)] text-left">아식스 x 앤더슨벨 젤 소노마 15-50 블랙 그린</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-border pl-[4px] pr-[4px] pt-[12px]">
                                        <p className="leading-[17px] text-[14px] font-bold text-left">237,000원</p>
                                        <p className="mt-[2px] leading-[13px] text-[11px] text-[rgba(34,34,34,.5)] text-left">즉시 판매가</p>
                                    </div>
                                </a>
                                <div className="pl-[4px] pr-[4px] flex pt-[8px] gap-x-3">
                                    <span className="inline-flex items-center box-border">
                                        <span className="flex h-[inherit] cursor-pointer opacity-50">
                                            <Image className="w-[18px] h-[14px]" alt="catebox" src="/images/bookmark.png" quality={100} width={512} height={512} />
                                        </span>
                                        <span className="ml-[1px] text-[rgba(34,34,34,.5)] text-[12px] tracking-[-.06px] box-border">30</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <a href="#" className="flex flex-col">
                                    <div className="bg-[#f4f4f4] rounded-[10px] overflow-hidden	relative pt-[100%]">
                                        <Image className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-full h-auto" alt="catebox" src="/images/rolex.png" quality={100} width={1120} height={1120} />                                    
                                    </div>
                                    <div className="pl-[4px] pr-[4px] flex-1 pt-[8px]">
                                        <div className="box-border">
                                            <p className="mb-[2px] flex items-center leading-[16px] text-[13px] tracking-[-.07px] font-bold	text-[#333]">Rolex</p>
                                            <div className="box-border">
                                                <p className="overflow-hidden text-ellipsis leading-[16px] text-[13px] font-medium text-left">Rolex Day-Date 40 Chocolate Roman 228235 (Fluted/President)</p>
                                                <p className="overflow-hidden text-ellipsis leading-[13px] mt-[2px] text-[11px] text-[rgba(34,34,34,.5)] text-left">롤렉스 데이데이트 40 초콜릿 로만 228235 (플루티드/프레지던트)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-border pl-[4px] pr-[4px] pt-[12px]">
                                        <p className="leading-[17px] text-[14px] font-bold text-left">70,000,000원</p>
                                        <p className="mt-[2px] leading-[13px] text-[11px] text-[rgba(34,34,34,.5)] text-left">즉시 판매가</p>
                                    </div>
                                </a>
                                <div className="pl-[4px] pr-[4px] flex pt-[8px] gap-x-3">
                                    <span className="inline-flex items-center box-border">
                                        <span className="flex h-[inherit] cursor-pointer opacity-50">
                                            <Image className="w-[18px] h-[14px]" alt="catebox" src="/images/bookmark.png" quality={100} width={512} height={512} />
                                        </span>
                                        <span className="ml-[1px] text-[rgba(34,34,34,.5)] text-[12px] tracking-[-.06px] box-border">30</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <a href="#" className="flex flex-col">
                                    <div className="bg-[#f4f4f4] rounded-[10px] overflow-hidden	relative pt-[100%]">
                                        <Image className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-full h-auto" alt="catebox" src="/images/asics.png" quality={100} width={1120} height={1120} />                                    
                                    </div>
                                    <div className="pl-[4px] pr-[4px] flex-1 pt-[8px]">
                                        <div className="box-border">
                                            <p className="mb-[2px] flex items-center leading-[16px] text-[13px] tracking-[-.07px] font-bold	text-[#333]">Asics</p>
                                            <div className="box-border">
                                                <p className="overflow-hidden text-ellipsis leading-[16px] text-[13px] font-medium text-left">Asics x Andersson Bell Gel-Sonoma 15-50 Black Green</p>
                                                <p className="overflow-hidden text-ellipsis leading-[13px] mt-[2px] text-[11px] text-[rgba(34,34,34,.5)] text-left">아식스 x 앤더슨벨 젤 소노마 15-50 블랙 그린</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-border pl-[4px] pr-[4px] pt-[12px]">
                                        <p className="leading-[17px] text-[14px] font-bold text-left">237,000원</p>
                                        <p className="mt-[2px] leading-[13px] text-[11px] text-[rgba(34,34,34,.5)] text-left">즉시 판매가</p>
                                    </div>
                                </a>
                                <div className="pl-[4px] pr-[4px] flex pt-[8px] gap-x-3">
                                    <span className="inline-flex items-center box-border">
                                        <span className="flex h-[inherit] cursor-pointer opacity-50">
                                            <Image className="w-[18px] h-[14px]" alt="catebox" src="/images/bookmark.png" quality={100} width={512} height={512} />
                                        </span>
                                        <span className="ml-[1px] text-[rgba(34,34,34,.5)] text-[12px] tracking-[-.06px] box-border">30</span>
                                    </span>
                                </div>
                            </div>                            
                        </div>
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default shop1;