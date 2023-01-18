import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faThin, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useSession } from 'next-auth/react';

const point =  () => {
    const { data : session } = useSession();
    return (
        <div className='w-[680px]'>
            <div className='text-[24px] font-semibold flex items-center'>
                <div>포인트</div>
                {session.provider}
                <FontAwesomeIcon icon={faQuestion} className='text-gray-200 border-[1px] w-[12px] h-[12px] p-1 rounded-[50%] ml-2 cursor-pointer'/>
            </div>
            <div className='border-[1px] bg-[#fafafa] border-[#EBEBEC] rounded-lg items-center p-8 flex mt-4'>
                <div className='border-r-[1px] w-1/3 flex flex-col items-center'>
                    <p className='text-[12px] font-[300]'>사용 가능한 포인트</p>
                    <p className='text-2xl font-semibold'>0P</p>
                </div>
                <div className='w-1/3 flex flex-col'>
                    <p className='text-[12px] font-[300] text-center'>이번달 소멸예정 포인트</p>
                    <p className='text-2xl font-semibold text-center'>0P</p>
                </div>
                <div className='w-1/3 flex flex-col items-center'>
                    <button className='border-[1px] bg-black text-white px-4 py-2 text-[14px] rounded-xl'>+포인트 적립하기</button>
                </div>
            </div>
            <p className='text-[12px] font-[200] mt-4'>포인트 유효기간은 적립일로부터 최대 1년까지이며, 유형에 따라 달라질 수 있습니다.</p>
            <table className='mt-8 border-t-2 w-full border-black'>
                <thead className='border-b-[1px]'>
                    <tr>
                        <th className='text-start text-[12px] font-[400] py-[15px]'>상세 내역</th>
                        <th className='text-end text-[12px] font-[400] py-[15px]'>적립/사용</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan='2' className='text-center text-[rgba(34,34,34,.5)] text-[14px]'>
                            <div className='pt-[150px]'>
                                <p>적립 또는 사용한 내역이 없습니다.</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default point;