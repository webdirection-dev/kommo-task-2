import '../../../utils/styles/header.css'
import Logo from '../../ui/Logo'
import Actions from './Actions'
import Navigate from './Navigate'

export default function Header() {

    return (
        <header>
            <div className='wrapper flex h-full'>
                <nav className='header flex justify-between items-center'>
                    <Logo />
                    <Navigate />
                    <Actions />
                </nav>
            </div>
        </header>
    )
}
