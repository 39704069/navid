import '../styles/main.scss'
import Layout from "../component/global/Layout";
import '../locale/locale'

function MyApp({ Component, pageProps }) {
  return(
       <Layout>

        <Component {...pageProps} />
       </Layout>
  )
}

export default MyApp
