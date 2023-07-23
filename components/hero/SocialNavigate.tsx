import Link from 'next/link'

export default function SocialNavigate() {

    return (
        <div
            className='social-nav flex justify-center absolute'
            style={{ top: '0', left: '0px' }}
        >
            <Link href='/about' className='social-nav-link text-white'
                style={{ top: '360px' }}
            >FACEBOOK</Link>

            <Link href='/about' className='social-nav-link text-white'
                style={{ top: '225px' }}
            >INSTAGRAM</Link>

            <Link href='/about' className='social-nav-link text-white'
                style={{ top: '100px' }}
            >TWITCH</Link>
        </div>
    )
}