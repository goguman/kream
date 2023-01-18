import { useRouter } from 'next/router';
import MyPageContainer from '../../components/mypage/MyPageContainer';
import Profile from '../../components/mypage/profile';
import { useState } from 'react';
import Address from '../../components/mypage/address';
import PayInfo from '../../components/mypage/payInfo';
import SellAccount from '../../components/mypage/sellAccount';
import CashReceipt from '../../components/mypage/cashReceipt';
import Point from '../../components/mypage/point';

const myInfo = (props) => {
    const router = useRouter();
    const { id  } = router.query;
    const components = {
        "profile": <Profile />,
        "address" : <Address />,
        "payInfo" : <PayInfo/>,
        "sellAccount" : <SellAccount/>,
        "cashReceipt" : <CashReceipt/>,
        "point" : <Point/>
    }
    const componet = components[id];
        return (
            <MyPageContainer>
                {componet}
            </MyPageContainer>
        )
}

export default myInfo;