import Head from 'next/head';
import Footer from './Footer';

const Layout = ({ children }) => {
  return(
    <div>
      <Head><title>{"Welcome"}</title></Head>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout