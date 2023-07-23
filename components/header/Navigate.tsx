import Link from 'next/link'

export default function Navigate() {

    return (
        <ul className='nav flex justify-center items-start'>
            <li className='nav-li'>
                <Link
                    href='/'
                    className='text-white'
                    style={{ color: '#FAC422' }}
                >Home</Link>
            </li>

            <li className='nav-li'>
                <Link href='/about' className='text-white'>About</Link>
            </li>

            <li className='nav-li'>
                <Link href='/team' className='text-white'>Team</Link>
            </li>

            <li className='nav-li'>
                <Link href='/shop' className='text-white'>Shop</Link>
            </li>

            <li className='nav-li'>
                <Link href='/pages' className='text-white'>Pages</Link>
            </li>
        </ul>
    )
}