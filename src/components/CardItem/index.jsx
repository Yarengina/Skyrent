import CardImage from '../../components/CardImage'
import classes from './index.module.css'

const CardItem = ({ card }) => {
  const { country, city, description, price } = card

  return (
    <div className={classes.cardWrapper}>
      <CardImage card={card} />
      <div>
        <h3 className={classes.location}>
          {country} → {city}
        </h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>$ {price} / month</p>
      </div>
    </div>
  )
}

export default CardItem
