import Link from 'next/link'
import '../../utils/styles/footer.css'
import Logo from '../ui/Logo'

export default function Footer() {

    return (
        <footer className='footer'>
            <div className='wrapper footer-wrap flex' style={{ paddingTop: '0' }} >
                <div className='footer-info'>
                    <Logo />

                    <p className='footer-description'>
                        Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .
                    </p>
                </div>

                <nav className='footer-nav flex flex-col'>
                    <h3 className='footer-h3'>Menu Items</h3>
                    <ul className='flex flex-col'>
                        <li>
                            <Link href='/about'>About</Link>
                        </li>

                        <li>
                            <Link href='/blog'>Blog</Link>
                        </li>

                        <li>
                            <Link href='/shop'>Shop</Link>
                        </li>

                        <li>
                            <Link href='/contact'>Contact Us</Link>
                        </li>
                    </ul>
                </nav>

                <nav className='footer-nav flex flex-col'>
                    <h3 className='footer-h3'>Other Pages</h3>
                    <ul className='flex flex-col'>
                        <li>
                            <Link href='/styleguide'>Styleguide</Link>
                        </li>

                        <li>
                            <Link href='/changelog'>Changelog</Link>
                        </li>

                        <li>
                            <Link href='/licenses'>Licenses</Link>
                        </li>

                        <li>
                            <Link href='/team'>Team</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
