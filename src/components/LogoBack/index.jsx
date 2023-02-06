import { useNavigate } from 'react-router-dom'
import Logo from '../Ui/Logo'
import BackArrow from '../Icons/BackArrow'
import classes from './index.module.css'

const LogoBack = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.back} onClick={handleBack}>
        <BackArrow />
      </div>
      <Logo />
    </div>
  )
}

export default LogoBack
