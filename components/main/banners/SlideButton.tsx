import Image from "next/image";

export default function SlideButton({direction, onClick}) {
    let right = "";
    if(direction == "next") {
        right = "right-0";
    }

    return (
        <div onClick={onClick} className={`btn-${direction} bottom-1/2 translate-y-1/2 z-50 w-12 h-12 p-2 absolute bg-gray-500 
                                    opacity-20 rounded-xl ${right}`}>
            <Image src={require(`../../../public/images/arrow/${direction}_arrow.svg`)} alt={direction}
                   className="w-full h-full" />
        </div>
    )
}