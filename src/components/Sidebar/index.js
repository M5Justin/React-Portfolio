import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/Mwhite.png'
import LogoSubtitle from '../../assets/images/MoranW.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faHome, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
<div className='nav-bar'>
    <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' to='/' />
            <img className='sub-logo' src={LogoSubtitle} alt='moran' to='/' />
    </Link>
    <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className="about-link" to='/about'>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className="portfolio-link" to='/portfolio'>
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className="contact-link" to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank"  rel='noreferer' href="https://www.linkedin.com/in/moranjustin/" >
                <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank"  rel='noreferer' href="https://github.com/M5Justin" >
                <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
            </a>
        </li>
        
        
    </ul>

</div>

)

export default Sidebar