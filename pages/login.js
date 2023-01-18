import LoginForm from "../components/Login/loginForm";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const login = () => {
    return (

        <LoginForm/>
    )
}

export default login;