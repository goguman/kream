import Image from "next/image";

const SingleBanner = ({imgPath, url}) => {
    return (
        <div className="single_banner w-full mt-12">
            <a className="w-full h-full flex justify-center overflow-hidden" href={url}>
                <Image src={imgPath} alt="banner_img" style={{height:"50vw", width:"auto"}}
                       className={"w-fit min-w-fit max-h-[480px]"} quality={100} width={2000} height={2000}/>
            </a>
        </div>
    );
};
export default SingleBanner;