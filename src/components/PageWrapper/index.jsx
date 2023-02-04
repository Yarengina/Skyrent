import Logo from '../Ui/Logo'
import classes from './index.module.css'

export const PageWrapper = ({ children }) => {
  return (
    <div className={classes.pageWrapper}>
      {children}
      <Logo className={classes.logo} />
      <p className={classes.year}>2023</p>
    </div>
  )
}

export default PageWrapper
