import cn from 'classnames'
import classes from './index.module.css'

const Button = ({ type, disabled, className, children, onClick, ...attrs }) => {
  return (
    <button
      {...attrs}
      type={type}
      disabled={disabled}
      className={cn(classes.btn, className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
