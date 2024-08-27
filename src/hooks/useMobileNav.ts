import { useContext } from 'react'
import { MobileNavContext } from '../context/MobileNavProvider';

const useMobileNav = () => useContext(MobileNavContext);

export default useMobileNav