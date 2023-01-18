import MyPageContainer from '../../components/mypage/MyPageContainer';
import { useSession } from 'next-auth/react';
import SideBar from '../../components/common/sideBar';
import My from '../../components/mypage/my';
import { useRouter } from 'next/router';



const myPage = () => {
    const router = useRouter();
    return (
        <MyPageContainer>
            <My/>
        </MyPageContainer>
    )
}

export default myPage;