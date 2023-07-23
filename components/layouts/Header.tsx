import Link from 'next/link'

const Header = () => <header>
    <nav className='shadow-md'>
        <ul className='flex justify-between items-center h-12 px-4'>
            <li>
                <Link href='/' className='text-lg font-bold'>
                    myStore
                </Link>
            </li>
        </ul>
    </nav>
</header>
export default Header
