import Button from '@/components/ui/Button'
import CartIcon from '@/components/ui/CartIcon'
import Link from 'next/link'

export default function Actions() {

    return (
        <div className='flex'>
            <CartIcon />
            <Button txt='Contact Us' border={true} />
        </div>
    )
}