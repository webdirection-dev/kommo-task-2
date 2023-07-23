import Link from 'next/link'

export default function Button({ color = false, border = false, m = false, txt = '' }) {
    const styles = {
        border: border ? '1px solid #FFF' : '',
        background: color ? '#57B8FF' : '',
        marginRight: m ? '15px' : ''
    }



    return (
        <button
            className='text-white btn'
            style={{ ...styles }}
        >{txt}</button>
    )
}