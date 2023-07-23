import '../../utils/styles/appeal.css'
import Subtitle from '../ui/Subtitle'
import Gallery from './Gallery'

export default function Appeal() {

    return (
        <div className='appeal'>
            <div
                className='wrapper flex items-center h-full'
                style={{ paddingTop: '0' }}
            >
                <div className='appeal-wrapper flex justify-between items-center w-full'>
                    <img
                        src={'/img/hero2.png'}
                        alt="My Image"
                        className='hero2-img'
                    />

                    <div className='w-1/2'>
                        <Subtitle txt={'FUTURE OF eSPORTS'} />
                        <h1 className='title'>Customize your Own Character</h1>
                        <p className='description'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
                        </p>

                        <Gallery />
                    </div>
                </div>
            </div>
        </div>
    )
}