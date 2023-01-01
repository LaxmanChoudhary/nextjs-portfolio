import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return(
    <div className='bg-slate-100 text-slate-800'>
      <Head><title>{"Welcome"}</title></Head>
      {/* <Header /> */}
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout