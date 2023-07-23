import Footer from './Footer'
import Header from './Header'

const General = ({ children }: any) => (
    <>
        <Header />
        <main className='container m-auto mt-4 px-4' style={{ minHeight: 'calc(100vh - 3rem - 2.5rem - 1rem)' }}>
            {children}
        </main>
        <Footer />
    </>
)
export default General
