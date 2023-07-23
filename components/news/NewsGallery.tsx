import NewsItem from './NewsItem'

export default function NewsGallery() {

    return (
        <div
            className='flex justify-between items-center news-wrapper'
            style={{ marginTop: '64px' }}
        >
            <NewsItem />

            <div className='grid grid-cols-2 gap-3 news-sub-wrapper'>
                <div className='flex flex-col news-sub-item'>
                    <img
                        src={'/img/news-2.png'}
                        alt="My Image"
                        className='news-2-img'
                    />

                    <h3 className='h4-date'
                        style={{ margin: '54px 0 28px' }}
                    >April 2, 2021</h3>

                    <h3 className='h4-subtitle'>NAVI reveals s1mple fifth anniversary</h3>
                </div>

                <div className='flex flex-col news-sub-item'>
                    <img
                        src={'/img/news-3.png'}
                        alt="My Image"
                        className='news-2-img'
                    />

                    <h3 className='h4-date'
                        style={{ margin: '54px 0 28px' }}
                    >April 2, 2021</h3>

                    <h3 className='h4-subtitle'>A1esports Shares new picture</h3>
                </div>

                <div className='flex flex-col news-sub-item'>
                    <img
                        src={'/img/news-4.png'}
                        alt="My Image"
                        className='news-2-img'
                    />

                    <h3 className='h4-date'
                        style={{ margin: '54px 0 28px' }}
                    >April 2, 2021</h3>

                    <h3 className='h4-subtitle'>T1 unveil partnership with Razer</h3>
                </div>

                <div className='flex flex-col news-sub-item'>
                    <img
                        src={'/img/news-5.png'}
                        alt="My Image"
                        className='news-2-img'
                    />

                    <h3 className='h4-date'
                        style={{ margin: '54px 0 28px' }}
                    >April 2, 2021</h3>

                    <h3 className='h4-subtitle'>RX secures content partnership with</h3>
                </div>
            </div>
        </div>
    )
}