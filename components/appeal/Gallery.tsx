export default function Gallery() {

    return (
        <ul className='gallery-list flex items-center'>
            <li className='gallery-item' style={{ background: '#3B3D46' }} >
                <img src={'/img/gall-1.png'} alt="My Image" />
            </li>
            <li className='gallery-item'>
                <img src={'/img/gall-2.png'} alt="My Image" />
            </li>
            <li className='gallery-item'>
                <img src={'/img/gall-3.png'} alt="My Image" />
            </li>
        </ul>
    )
}