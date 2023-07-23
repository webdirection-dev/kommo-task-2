import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Appeal from '@/components/appeal/Appeal'
import News from '@/components/news/News'
import Footer from '@/components/footer/Footer'

const Home = () => {

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Appeal />
                <News />
            </main>
            <Footer />
        </>
    )
}
export default Home