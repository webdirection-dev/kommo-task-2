import '../../utils/styles/appeal.css'
import Subtitle from '../ui/Subtitle'

export default function Appeal() {

    return (
        <div className='appeal'>
            <div className='wrapper flex items-center h-full'>
                <div className='flex flex items-center'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}