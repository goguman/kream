import '../styles/globals.css'
import TopBar from "../components/common/TopBar";
import {SessionProvider} from "next-auth/react"
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Footer from '../components/common/Footer';

function MyApp({Component, pageProps: {session, ...pageProps}}) {
    const router = useRouter();
    useEffect(() => prePage, [router.asPath]);
    const queryClient = new QueryClient({
        defaultOptions:{
            queries:{
                staleTime: 1000*600,
            }
        }
    });
    const prePage = () => {
        const storage = globalThis?.sessionStorage;
        if (!storage) return;
        const prePath = storage.getItem('currentPath');
        storage.setItem("prevPath", prePath || '/');
        storage.setItem("currentPath", globalThis.location.pathname);
    }
    return (
        <SessionProvider session={session} refetchInterval={5 * 60} >
            <QueryClientProvider client={queryClient} >
                <TopBar/>
                <Component {...pageProps} />
                <div id={"modal-root"}></div>
                <Footer />
            </QueryClientProvider>
        </SessionProvider>
    )
        ;
}

export default MyApp;