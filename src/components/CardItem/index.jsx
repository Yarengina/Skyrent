import classes from './index.module.css'

const CardItem = ({ card }) => {
  const { title, picture_url, country, city, description, price } = card

  return (
    <div className={classes.cardWrapper}>
      <div className={classes.imgWrapper}>
        <img
          className={classes.img}
          width="100%"
          height="100%"
          src={picture_url}
          alt={title}
        />
      </div>
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
