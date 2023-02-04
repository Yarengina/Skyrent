import { Link } from 'react-router-dom'
import cn from 'classnames'
import classes from './index.module.css'

const Logo = ({ className }) => {
  return (
    <Link to="/">
      <h2 className={cn(classes.logo, className)}>SKYRENT</h2>
    </Link>
  )
}

export default Logo
