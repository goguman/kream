

const address =  () => {
    return (
        <div className='max-w-[680px]'>
            <div className='text-[22px] font-semibold flex'>
                주소록
                <button className='ml-auto border-[1px] border-black text-[13px] px-2 font-[300] rounded-lg'> + 새 배송지 추가</button>
            </div>
            <div className='pt-8'>
                <div className='flex flex-col border-b-[2px] border-black text-[15px] pb-6'>
                    <div className='flex items-center'>
                        <div className='font-[500]'>김**</div> <div className='border-[1px] bg-gray-100 rounded-lg px-2 text-[12px] ml-2'>기본 배송지</div>
                    </div>
                    <div className='pt-1 flex'>
                        <div>
                            <h2>010-9***-*178</h2>
                            <span>(1123)</span><span> 경기 성남시 장미로 303호 아이티 포워드</span>
                        </div>
                        <div className='ml-auto'>
                            <button className='ml-2 border-[1px] px-2 rounded-lg py-1 text-[13px] font-[300]'>수정</button>
                            <button className='ml-2 border-[1px] px-2 rounded-lg py-1 text-[13px] font-[300]'>삭제</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default address;