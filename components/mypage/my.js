import { useSession } from 'next-auth/react';
import {faPlus, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from 'next/link';

const my = () => {
    const { data : session, status } = useSession();
    const userName = session.user.email.split(/@/)[0];
    const emailLength = userName.length;
    let secretEmail = '';
    for(let i = 0; i<emailLength-2; i++){
        secretEmail += '*';
    }
    const userEmail = session.user.email.substring(0,1) + secretEmail + session.user.email.substring(emailLength-1, emailLength) + session.user.email.substring(emailLength);
    return (
        <div>
            <div className='flex flex-col w-full mr-14'>
                <div className='border w-full h-[231px] rounded-lg block'>
                    <div className='flex pt-[30px] pb-[32px] pl-[22px]'>
                        <div>
                            <img className='border w-[100px] h-[100px] rounded-[50%]' src = {session.user.image ? session.user.image : 'images/mypage/defaultUser.png'}
                                 width={80}/>
                        </div>
                        <div className='infoBox pl-4'>
                            <div className='font-semibold text-lg'>{session.user.name ? session.user.name : userName}</div>
                            <div className='text-sm text-gray-500 font-light'>{userEmail}</div>
                            <div className='flex pt-2 space-x-2'>
                                <div
                                    className='border w-[84px] h-[36px] flex items-center  justify-center rounded-lg'>
                                    <Link href='/myPage/[id]?id=profile' className='text-[12px] font-thin'>프로필 수정</Link>
                                </div>
                                <div
                                    className='border w-[84px] h-[36px] flex items-center  justify-center rounded-lg'>
                                    <button className='text-[12px] font-thin'>내 스타일</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full h-[77px] border-t items-center'>
                        <div className='w-1/2 flex justify-center items-center border-r-[1px] h-fit '>
                            <div className='flex flex-col items-center'>
                                일반 회원
                                <p className='text-sm font-light text-gray-400'>회원 등급</p>
                            </div>

                        </div>
                        <div className='w-1/2 flex justify-center items-center h-fit'>
                            <div className='flex flex-col items-center'>
                                0P
                                <p className='text-sm font-light text-gray-400'>포인트</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[42px] flex w-full items-center pb-4'>
                    <h2 className='text-lg font-semibold'>보관 판매 내역</h2>
                    <a className='ml-auto text-[12px] text-gray-400'>더보기 <FontAwesomeIcon
                        icon={faChevronRight}/></a>
                </div>
                <div className='border-[#f2f9f6] rounded-lg table w-full bg-[#f2f9f6]'>
                    <div className='table-cell text-center'>
                        <a className='w-full h-[96px]  block relative pt-4' href='/'>
                            <div className='text-[13px]'>발송요청</div>
                            <div className='text-green-600 font-semibold text-lg'>0</div>
                        </a>
                    </div>
                    <div className='table-cell text-center'>
                        <a className='w-full h-[96px]  block relative pt-4' href='/'>
                            <div className='text-[13px]'>판매대기</div>
                            <div className='font-semibold text-lg'>0</div>
                        </a>
                    </div>
                    <div className='table-cell text-center'>
                        <a className='w-full h-[96px]  block relative pt-4' href='/'>
                            <div className='text-[13px]'>판매중</div>
                            <div className='font-semibold text-lg'>0</div>
                        </a>
                    </div>
                    <div className='table-cell text-center'>
                        <a className='w-full h-[96px]  block relative pt-4' href='/'>
                            <div className='text-[13px]'>정산완료</div>
                            <div className='font-semibold text-lg'>0</div>
                        </a>
                    </div>
                </div>
                <div className='border mt-4 rounded-lg bg-[rgba(34,34,34,.8)]'>
                    <a href='/' className='flex items-center'>
                        <div className='w-[34px] h-[34px] rounded-[50%] border-green-400 m-4 bg-green-400'>
                            <img src={'images/mypage/boxImage.svg'}/>
                        </div>
                        <div>
                            <p className='text-white text-[14px]'>보관 신청하기</p>
                            <p className='text-white font-thin text-[12px]'>한 번에 신청하고 한 번에 발송하세요.</p>
                        </div>
                        <div className='ml-auto pr-4'><FontAwesomeIcon className='text-white text-sm'
                                                                       icon={faChevronRight}/></div>
                    </a>
                </div>
                <div className='mt-[42px] flex w-full items-center pb-4'>
                    <h2 className='text-lg font-semibold'>구매 내역</h2>
                    <a className='ml-auto text-[12px] text-gray-400'>더보기 <FontAwesomeIcon
                        icon={faChevronRight}/></a>
                </div>
                <div className='border-[#fafafa] bg-[#fafafa] table w-full rounded-lg'>
                    <div className='table-cell text-center'>
                        <a className='w-full h-[96px]  block relative pt-4' href='/'>
                            <div className='text-[13px]'>전체</div>
                            <div className='font-semibold text-lg text-red-400'>0</div>
                        </a>
                    </div>
                    <div className='table-cell text-center'>
                        <a className='w-full h-[96px]  block relative pt-4' href='/'>
                            <div className='text-[13px]'>입찰 중</div>
                            <div className='font-semibold text-lg'>0</div>
                        </a>
                    </div>
                    <div className='table-cell text-center'>
                        <a className='w-full h-[96px]  block relative pt-4' href='/'>
                            <div className='text-[13px]'>진행 중</div>
                            <div className='font-semibold text-lg'>0</div>
                        </a>
                    </div>
                    <div className='table-cell text-center'>
                        <a className='w-full h-[96px]  block relative pt-4' href='/'>
                            <div className='text-[13px]'>종료</div>
                            <div className='font-semibold text-lg'>0</div>
                        </a>
                    </div>
                </div>
                <div className='mt-[42px] flex w-full items-center pb-4'>
                    <h2 className='text-lg font-semibold'>판매 내역</h2>
                    <a className='ml-auto text-[12px] text-gray-400'>더보기 <FontAwesomeIcon
                        icon={faChevronRight}/></a>
                </div>
                <div className='border-[#fafafa] bg-[#fafafa] table w-full rounded-lg'>
                    <div className='table-cell text-center'>
                        <a className='w-full h-[96px]  block relative pt-4' href='/'>
                            <div className='text-[13px]'>전체</div>
                            <div className='font-semibold text-lg text-green-600'>0</div>
                        </a>
                    </div>
                    <div className='table-cell text-center'>
                        <a className='w-full h-[96px]  block relative pt-4' href='/'>
                            <div className='text-[13px]'>입찰 중</div>
                            <div className='font-semibold text-lg'>0</div>
                        </a>
                    </div>
                    <div className='table-cell text-center'>
                        <a className='w-full h-[96px]  block relative pt-4' href='/'>
                            <div className='text-[13px]'>진행 중</div>
                            <div className='font-semibold text-lg'>0</div>
                        </a>
                    </div>
                    <div className='table-cell text-center'>
                        <a className='w-full h-[96px]  block relative pt-4' href='/'>
                            <div className='text-[13px]'>종료</div>
                            <div className='font-semibold text-lg'>0</div>
                        </a>
                    </div>
                </div>
                <div className='mt-[42px] flex w-full items-center pb-4'>
                    <h2 className='text-lg font-semibold'>관심 상품</h2>
                </div>
                <div
                    className='border-[#fafafa] bg-[#fafafa] h-[221px] rounded-lg flex flex-col items-center justify-center'>
                    <p className='text-[14px] text-[rgba(34,34,34,.5)]'>추가하신 관심 상품이 없습니다.</p>
                    <div
                        className='border mt-2 px-2 py-[12px] h-[34px] flex items-center  justify-center rounded-lg'>
                        <Link href='/shop' className='text-[12px] text-[rgba(34,34,34,.8)] font-[400]'>SHOP 바로가기</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default my;