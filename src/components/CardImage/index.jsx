import classes from './index.module.css'

const CardImage = ({ card }) => {
  const { title, picture_url } = card

  return (
    <div className={classes.imgWrapper}>
      <img
        className={classes.img}
        width="100%"
        height="100%"
        src={picture_url}
        alt={title}
      />
    </div>
  )
}

export default CardImage
