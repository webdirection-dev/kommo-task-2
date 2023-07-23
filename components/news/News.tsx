import '../../utils/styles/news.css'
import Button from '../ui/Button'
import Subtitle from '../ui/Subtitle'
import NewsGallery from './NewsGallery'

export default function News() {

    return (
        <div className='news'>
            <div
                className='wrapper flex flex-col h-full'
                style={{ paddingTop: '0' }}
            >
                <div className='flex justify-between items-end w-full'>
                    <div>
                        <Subtitle txt={'FUTURE OF eSPORTS'} />
                        <h1 className='title'>Latest News & Articles</h1>
                    </div>

                    <Button color={true} txt='Read More' />
                </div>

                <NewsGallery />
            </div>
        </div>
    )
}