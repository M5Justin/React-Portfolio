import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/Mwhite.png'
import LogoSubtitle from '../../assets/images/MoranW.png'

const Sidebar = () => (
<div className='nav-bar'>
    <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'/>
            <img className='sub-logo' src={LogoSubtitle} alt='moran' />
    </Link>
    <nav>
        
    </nav>

</div>

)

export default Sidebar