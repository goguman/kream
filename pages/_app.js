import '../styles/globals.css'
import TopBar from "../components/common/TopBar";
import {Provider} from "react-redux";
import Footer from "../components/common/Footer";
import {SessionProvider} from "next-auth/react"
import {QueryClient, QueryClientProvider} from "react-query";
import {useRouter} from 'next/router';
import {useEffect} from "react";


function MyApp({ Component, pageProps: {session, ...pageProps} }) {
    const router = useRouter();
    useEffect(() => prePage, [router.asPath]);
    const queryClient = new QueryClient();
    const prePage = () => {
        const storage = globalThis?.sessionStorage;
        if (!storage) return;
        const prePath = storage.getItem('currentPath');
        storage.setItem("prevPath", prePath || '/');
        storage.setItem("currentPath", globalThis.location.pathname);
    }
  return (
      <SessionProvider session={session} refetchInterval={1 * 10} >
          <QueryClientProvider client={queryClient}>
              <TopBar/>
              <Component {...pageProps}/>
              <Footer/>
          </QueryClientProvider>
      </SessionProvider>
  );
}

export default MyApp;