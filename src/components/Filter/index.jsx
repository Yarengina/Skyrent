import { useState } from 'react'
import Button from '../Ui/Button'
import DownArrow from '../Icons/DownArrow'
import classes from './index.module.css'

const Filter = () => {
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const handleMinPriceChange = ({ target: { value } }) => {
    if (/^\d*$/.test(value)) {
      setMinPrice(value ? Number(value).toString() : '')
    }
  }

  const handleMaxPriceChange = ({ target: { value } }) => {
    if (/^\d*$/.test(value)) {
      setMaxPrice(value ? Number(value).toString() : '')
    }
  }

  return (
    <div className={classes.formWrapper}>
      <form className={classes.form}>
        <button className={classes.btnSelect} type="button">
          <span>Страна и город</span>
          <DownArrow />
        </button>
        <div className={classes.inputsWrapper}>
          <input
            className={classes.input}
            placeholder="Цена от"
            onChange={handleMinPriceChange}
            value={minPrice}
          />
          <input
            className={classes.input}
            placeholder="Цена до"
            onChange={handleMaxPriceChange}
            value={maxPrice}
          />
        </div>
        <Button className={classes.btnSubmit} type="submit">
          Подобрать
        </Button>
      </form>
    </div>
  )
}

export default Filter
