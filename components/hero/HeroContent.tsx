import Subtitle from '@/components/ui/Subtitle'

export default function HeroContent() {

    return (
        <div className='flex'>
            <div className='w-1/2'
                style={{ width: '45.3%' }}
            >
                <Subtitle txt={'FUTURE OF eSPORTS'} />
                <h1 className='title'>Unleash the Next Generation of Gaming</h1>
                <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.
                </p>
            </div>

            <img
                src={'/img/hero.png'}
                alt="My Image"
                className='hero-img'
            />
        </div>
    )
}