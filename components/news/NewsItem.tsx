export default function NewsItem() {

    return (
        <div className='flex flex-col news-item'>
            <img
                src={'/img/news-1.png'}
                alt="My Image"
                className='news-1-img'
            />

            <h3 className='h3-date'
                style={{ margin: '54px 0 28px' }}
            >April 2, 2021</h3>

            <h3 className='h3-subtitle'>Esports Group teams up with the Indianapolis Colts</h3>
        </div>
    )
}