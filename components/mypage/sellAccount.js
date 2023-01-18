import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const sellAccount = () => {
    const bank = [
        {
            name : '국민은행',
        },
        {
            name : '신한은행',
        },{
            name : '우리은행',
        },{
            name : '하나은행',
        },{
            name : '기업은행',
        },{
            name : '농협은행',
        },{
            name : 'SC은행',
        },{
            name : '우체국',
        },{
            name : '한국씨티은행',
        },{
            name : '산업은행',
        },{
            name : '카카오뱅크',
        },{
            name : '부산은행',
        },{
            name : '대구은행',
        },{
            name : '광주은행',
        },{
            name : '케이은행',
        },{
            name : '수협중앙회',
        },{
            name : '제주은행',
        },{
            name : '전북은행',
        },{
            name : '지역농축협',
        },{
            name : '경남은행',
        },{
            name : '새마을금고연합회',
        },{
            name : '신협',
        },{
            name : '저축은행',
        },{
            name : 'HSBC은행',
        },{
            name : '도이치은행',
        },
        {
            name : '제이피모간체이스은행',
        },{
            name : 'BOA은행',
        },{
            name : '비엔피파리바은행',
        },{
            name : '중국상공은행',
        },{
            name : '산림조합',
        },{
            name : '중국건설은행',
        },{
            name : '토스뱅크',
        },
    ]
    return (
        <div className='max-w-[680px]'>
            <div className='text-[22px] font-semibold'>
                정산 계좌 변경
            </div>
            <div className='flex flex-col mt-4 border-[1px] bg-[#fafafa] text-[14px] px-2 py-4 rounded-lg justify-center'>
                <span className='text-[12px] font-[600]'>등록된 계좌 정보</span>
                <span>국민은행 1234512321412/ 홍길동</span>
            </div>
            <div className='flex flex-col mt-4'>
                <span className='text-[14px]'>은행명</span>
                <div className='border-b-[1px] pb-1 text-[15px] font-[300] flex cursor-pointer'><input type='text' placeholder='선택하세요'/><div className='ml-auto border-[1px] rounded-[50%] w-[24px] h-[24px] flex justify-center'><FontAwesomeIcon icon={faCaretDown} size='lg'/></div></div>
            </div>
            <div className='flex flex-col mt-8'>
                <span className='text-[14px]'>계좌번호</span>
                <div className='text-[15px] font-[300] flex cursor-pointer '><input type='text' placeholder='- 없이 입력하세요' className='w-full focus:login-focus border-b-[1px] pb-1' autoComplete='off'/></div>
            </div>
            <div className='flex flex-col mt-8'>
                <span className='text-[14px]'>예금주</span>
                <div className='text-[15px] font-[300] flex cursor-pointer'><input type='text' placeholder='예금주명을 정확히 입력하세요' className='w-full focus:login-focus border-b-[1px] pb-1' autoComplete='off'/></div>
            </div>
            <div className='flex justify-center mt-8'>
                <button className='border-[1px] bg-gray-200 text-white text-[14px] px-4 py-2 rounded-lg'>
                    변경하기
                </button>
            </div>
        </div>
    )
}

export default sellAccount;