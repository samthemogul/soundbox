
import useTheme from '../hooks/useTheme';
import useMobileNav from '../hooks/useMobileNav';
import { logoDark, logoWhite } from '../assets';
import { FiMenu } from "react-icons/fi";

import '../styles/components/mobileheader.css'

const MobileHeader = () => {

    const { theme } = useTheme() || {};
    const { toggleNav } = useMobileNav() || {};
  return (
    <div className='mobile-header-container'>
        <div className='mobile-h-logo-con'>
            <img src={theme === 'dark' ? logoWhite : logoDark} alt="soundbox" className='header-logo-img' />
            <h3 className='mobile-header-text'>Soundbox</h3>
        </div>

        <div>
            <button className='mobile-header-button' onClick={toggleNav}>
            <FiMenu color='black' size={40} />
            </button>
        </div>
    </div>
  )
}

export default MobileHeader