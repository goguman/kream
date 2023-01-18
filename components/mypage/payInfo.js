

const payInfo = () => {
    return (
        <div className='max-w-[680px]'>
            <div className='text-[22px] font-semibold flex items-center border-b-[3px] border-black pb-4'>
                <div>
                <h2>결제 정보</h2>
                <p className='text-[12px] font-[200]'>수수료(페널티, 착불배송비 등)가 정산도지 않을 경우, 별도 고지 없이 해당 금액을 결제 시도할 수 있습니다.</p>
                </div>
                <button className='ml-auto border-[1px] border-black text-[13px] px-2 py-1 font-[300] rounded-lg'> + 새 카드 추가하기</button>
            </div>
            <div className='flex pt-8 border-b-[2px] border-black pb-8'>
                <div className='flex items-center'>
                    <span className='border-[1px] px-3 py-2 rounded-lg'>NH</span>
                    <div className='pl-4 flex flex-col text-[12px]'>
                        <span>****-****-****-1234</span>
                        <span className='border-[1px] bg-gray-400 w-fit text-white text-[11px] px-2 rounded-lg'>기본 결제</span>
                    </div>
                </div>
                <div className='ml-auto border-[1px] text-[12px] font-[300] px-3 h-fit py-1 rounded-lg'>
                    삭제
                </div>
            </div>
        </div>
    )
}
export default payInfo;