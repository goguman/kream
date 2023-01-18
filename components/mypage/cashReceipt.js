import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const cashReceipt =   () =>{
    return (
        <div>
            <div className='text-[24px] font-semibold'>
                현금영수증 정보
            </div>
            <p className='text-[13px] w-[480px]'>{"현금영수증은 판매 거래 시 발생하는 수수료에 대해 <정산완료> 후 7일 이내에 건별로 발견됩니다. '미신청'선택 시 자진 발급으로 처리됩니다."}</p>
            <div className='flex flex-col mt-2'>
                <p className='text-[14px]'>형태</p>
                <div className='w-[480px]  border-b-[1px] pb-2 flex mt-2'><input type='text' className='text-[15px] font-[300]' value='미신청' /><div className='ml-auto border-[1px] rounded-[50%] w-[24px] h-[24px] flex justify-center'><FontAwesomeIcon icon={faCaretDown} size='lg'/></div></div>
                <div className='flex justify-center w-[480px] text-[14px]'><button className='border-[1px] bg-black text-white py-2 px-8 rounded-xl mt-8'>저장하기</button></div>
            </div>
        </div>

    )
}

export default cashReceipt;