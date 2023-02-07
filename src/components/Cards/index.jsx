import { Link } from 'react-router-dom'
import CardItem from '../CardItem'
import classes from './index.module.css'

const Cards = ({ cards }) => {
  return (
    <>
      {cards.length !== 0 && (
        <div className={classes.content}>
          {cards.map((card) => (
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
