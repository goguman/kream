import '../styles/globals.css'
import TopBar from "../components/common/TopBar";
import wrapper, {persistor, store} from "../store";
import {Provider} from "react-redux";
import Footer from "../components/common/Footer";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
          <QueryClientProvider client={queryClient}>
              <TopBar/>
              <Component {...pageProps}/>
              <Footer/>
          </QueryClientProvider>
      </Provider>
  );
}

export default wrapper.withRedux(MyApp);