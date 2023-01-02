import Head from 'next/head';
import Footer from './Footer';

const Layout = ({ children }) => {
  return(
    <div>
      <Head><title>{"Welcome"}</title></Head>
      <main className='bg-neutral-100 text-slate-900'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout