import TwitterIcon from '../assets/Twitter Icon.png'
import InstagramIcon from '../assets/Instagram Icon.png'
import GitHubIcon from '../assets/GitHub Icon.png'
import FacebookIcon from '../assets/Facebook Icon.png'

export default function Footer() {
    return(
        <footer>
            <img className='icon' src={ TwitterIcon } alt="" />
            <img className='icon' src={ InstagramIcon } alt="" />
            <img className='icon' src={ GitHubIcon } alt="" />
            <img className='icon' src={ FacebookIcon } alt="" />
        </footer>
    )
}