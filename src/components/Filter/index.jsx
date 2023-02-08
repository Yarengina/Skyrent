import { useState } from 'react'
import Button from '../Ui/Button'
import DownArrow from '../Icons/DownArrow'
import getLocations from '../../utils/getLocations'
import classes from './index.module.css'
import cn from 'classnames'

const Filter = ({ data }) => {
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [selectShown, setSelectShown] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState('')

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

  const handleSelect = () => {
    setSelectShown((prev) => !prev)
  }

  const handleSelectLocation = (location) => {
    setSelectedLocation(location === selectedLocation ? '' : location)
    setSelectShown((prev) => !prev)
  }

  return (
    <div className={classes.formWrapper}>
      <form className={classes.form}>
        <button
          className={classes.btnSelect}
          type="button"
          onClick={handleSelect}
        >
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
        {selectShown && (
          <div className={classes.selectWrapper}>
            {getLocations(data).map((location) => {
              return (
                <div
                  onClick={() => handleSelectLocation(location)}
                  className={cn(classes.item, {
                    [classes.selected]: location === selectedLocation,
                  })}
                  key={location}
                >
                  <span className={classes.itemText}>{location}</span>
                </div>
              )
            })}
          </div>
        )}
      </form>
    </div>
  )
}

export default Filter
