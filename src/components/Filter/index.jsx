import Button from '../Ui/Button'
import DownArrow from '../Icons/DownArrow'
import classes from './index.module.css'

const Filter = () => {
  return (
    <div className={classes.formWrapper}>
      <form className={classes.form}>
        <button className={classes.select} type="button">
          <span>Страна и город</span>
          <DownArrow />
        </button>
        <div className={classes.inputsWrapper}>
          <input className={classes.input} placeholder="Цена от" />
          <input className={classes.input} placeholder="Цена до" />
        </div>
        <Button className={classes.btn} type="submit">Подобрать</Button>
      </form>
    </div>
  )
}

export default Filter
