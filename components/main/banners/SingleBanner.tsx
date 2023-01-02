import Image from "next/image";

const SingleBanner = ({imgPath, url}) => {
    return (
        <div className="single_banner w-full mt-12">
            <a className="w-full h-full" href={url}>
                <Image src={imgPath} alt="banner_img"
                       quality={100} width={2000} height={500}/>
            </a>
        </div>
    );
};
export default SingleBanner;