import { BouncingBalls } from 'loaders-ui';
import useTheme from '../hooks/useTheme';

import '../styles/components/loader.css'

const Loader = () => {
    const { theme } = useTheme() || {};
  return (
    <div>
        <BouncingBalls className='loader-container' width={10} color={ theme == "dark" ? "white" : "black"} />
    </div>
  )
}

export default Loader