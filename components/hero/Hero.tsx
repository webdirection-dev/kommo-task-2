import '../../utils/styles/hero.css'
import Button from '../ui/Button'
import HeroContent from './HeroContent'
import SocialNavigate from './SocialNavigate'

export default function Hero() {
    return (
        <div className='hero' >
            <div className='wrapper relative'>
                <div className='hero-content'>
                    <HeroContent />
                    <div className='flex'
                        style={{ marginTop: '53px' }}
                    >
                        <Button txt='Explore More' color={true} m={true} />
                        <Button txt='View our team' />
                    </div>
                    <SocialNavigate />
                </div>
            </div>
        </div>
    )
}