import Link from 'next/link';
import {useSession} from 'next-auth/react';
import {faPlus, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

const MyPageContainer = ({children}) => {
    const {data: session, status} = useSession();
    const router = useRouter();
    const myInfoyRef = useRef([]);
    const shopInfo = [
        {
            id: "buying",
            name: '구매 내역'
        },
        {
            id: 'selling',
            name: '판매 내역'
        },
        {
            id: 'iventory',
            name: '보관 판매'
        },
        {
            id: 'wish',
            name: '관심 상품'
        },
    ]
    const myinfo = [
        {
            id: "profile",
            name: '프로필 정보'
        },
        {
            id: 'address',
            name: '주소록'
        },
        {
            id: 'payInfo',
            name: '결제 정보'
        },
        {
            id: 'sellAccount',
            name: '판매 정산 계좌'
        },
        {
            id: 'cashReceipt',
            name: '현금영수증 정보'
        },
        {
            id : 'point',
            name :'포인트'
        }
    ]


    if(status === 'authenticated') {
        return (
            <div className='w-screen'>
                <div className='flex mx-auto my-0 py-[130px] pl-[40px] border-b lg:w-[1280px]'>
                    <div className='flex flex-col w-[180px] mr-[20px]'>
                        <div className='text-2xl font-semibold'>
                            <Link href='/myPage'>마이 페이지</Link>
                        </div>
                        <div className='pt-6 text-xl font-medium'>
                            쇼핑 정보
                            <ul className='text-sm font-thin text-gray-400'>
                                {shopInfo.map((index) => (
                                    <li key={index.id} className='pt-2' >
                                        <Link href={`/myPage/[id]?id=${index.id}`}
                                              className={router.query.id === index.id ? 'font-bold text-black text-[15px]': ''}
                                        >{index.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='pt-6 text-xl font-medium'>
                            내 정보
                            <ul className='text-sm font-thin text-gray-400'>
                                {myinfo.map((index) => (
                                    <li key={index.id} className='pt-2' >
                                        <Link href={`/myPage/[id]?id=${index.id}`}
                                              className={router.query.id === index.id ? 'font-bold text-black text-[15px]': ''}
                                        >{index.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='w-[1000px]'>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}
export default MyPageContainer;