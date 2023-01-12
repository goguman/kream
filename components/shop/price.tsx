import Image from "next/image";


const price = () => {
    return(
        <div >
            <ul className="max-h-[315px] block">
                <li className="flex">
                    <a href="#" className="flex items-start	text-[14px] tracking-[-.21px]">
                        <Image className="mx-auto mr-[8px] shrink-0	" alt="catebox" src="/images/catebox.png" quality={100} width={16} height={17} />
                        <span className="max-w-[160px] ">10만원 이하</span>
                    </a>                                
                </li>
                <li className="flex pt-[10px]">
                    <a href="#" className="flex items-start	text-[14px] tracking-[-.21px]">
                        <Image className="mx-auto mr-[8px] shrink-0	" alt="catebox" src="/images/catebox.png" quality={100} width={16} height={17} />
                        <span className="max-w-[160px] ">10만원-30만원 이하</span>
                    </a>                                
                </li>
                <li className="flex pt-[10px]">
                    <a href="#" className="flex items-start	text-[14px] tracking-[-.21px]">
                        <Image className="mx-auto mr-[8px] shrink-0	" alt="catebox" src="/images/catebox.png" quality={100} width={16} height={17} />
                        <span className="max-w-[160px] ">30만원-50만원 이하</span>
                    </a>                                
                </li>
                <li className="flex pt-[10px]">
                    <a href="#" className="flex items-start	text-[14px] tracking-[-.21px]">
                        <Image className="mx-auto mr-[8px] shrink-0	" alt="catebox" src="/images/catebox.png" quality={100} width={16} height={17} />
                        <span className="max-w-[160px] ">50만원 이상</span>
                    </a>                                
                </li>
            </ul>
        </div>
    )
}
export default price;