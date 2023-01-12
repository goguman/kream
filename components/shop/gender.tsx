import Image from "next/image";


const gender = () => {
    return(
        <div >
            <ul className="max-h-[315px] block">
                <li className="flex">
                    <a href="#" className="flex items-start	text-[14px] tracking-[-.21px]">
                        <Image className="mx-auto mr-[8px] shrink-0	" alt="catebox" src="/images/catebox.png" quality={100} width={16} height={17} />
                        <span className="max-w-[160px] ">남성</span>
                    </a>                                
                </li>
                <li className="flex pt-[10px]">
                    <a href="#" className="flex items-start	text-[14px] tracking-[-.21px]">
                        <Image className="mx-auto mr-[8px] shrink-0	" alt="catebox" src="/images/catebox.png" quality={100} width={16} height={17} />
                        <span className="max-w-[160px] ">여성</span>
                    </a>                                
                </li>
                <li className="flex pt-[10px]">
                    <a href="#" className="flex items-start	text-[14px] tracking-[-.21px]">
                        <Image className="mx-auto mr-[8px] shrink-0	" alt="catebox" src="/images/catebox.png" quality={100} width={16} height={17} />
                        <span className="max-w-[160px] ">키즈</span>
                    </a>                                
                </li>
            </ul>
        </div>
    )
}
export default gender;