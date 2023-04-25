import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'

const Contact = () => {
    
    return (
        <>
            <div className='container contact-page'></div>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                        />
                    </h1>
                </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact