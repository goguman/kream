import Image from "next/image";

const BottomBanner = () => {
    return (
        <div className="banner_bottom md:flex w-full mt-12 text-white"
             style={{textShadow:"-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;"}}>
            <a href="#" className="banner_box bg-[#565656] flex relative h-[200px] md:w-1/2 px-8 pt-10">
                <div className="banner_info align-middle">
                    <div className="info_subtitle text-xs font-bold">SERVICE GUIDE</div>
                    <div className="info_title pt-2">KREAM은 처음이지?<br/>서비스 소개를 확인해보세요.</div>
                    <div className="info_txt border mt-3 text-xs w-fit p-1 rounded-md">서비스 안내</div>
                </div>
                <Image className="absolute top-0 right-0 h-full" src="/images/banner/banner_bottom1.png" alt="service_guide"
                       width={350} height={200} quality={100}/>
            </a>
            <a href="#" className="banner_box bg-[#3b3a3c] flex relative h-[200px] md:w-1/2 px-8 pt-10">
                <div className="banner_info z-10">
                    <div className="info_subtitle text-xs font-bold">DOWNLOAD THE APP</div>
                    <div className="info_title pt-2">KREAM 앱을 설치하여<br/>한정판 스니커즈를 FLEX 하세요!</div>
                    <div className="info_txt border mt-3 text-xs w-fit p-1 rounded-md">앱 설치하기</div>
                </div>
                <Image className="absolute top-0 right-0 h-full z-0" src="/images/banner/banner_bottom2.png" alt="service_guide"
                       width={350} height={200} quality={100}/>
            </a>
        </div>
    );
}
export default BottomBanner;