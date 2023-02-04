import { Link } from 'react-router-dom'
import CardItem from '../CardItem'
import classes from './index.module.css'

const Cards = ({ data }) => {
  return (
    <>
      {data.length !== 0 && (
        <div className={classes.content}>
          {data.map((card) => (
            <Link
              to={`/card/${card.pk}`}
              key={card.pk}
              className={classes.link}
            >
              <CardItem card={card} />
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default Cards
