import { Link, useParams } from 'react-router-dom'
import PageWrapper from '../../components/PageWrapper'
import Logo from '../../components/Ui/Logo'
import BackArrow from '../../components/Icons/BackArrow'
import CardImage from '../../components/CardImage'
import Button from '../../components/Ui/Button'
import TickIcon from '../../components/Icons/TickIcon'
import OffIcon from '../../components/Icons/OffIcon'
import data from '../../data.json'
import classes from './index.module.css'

const CardPage = () => {
  const cardPk = Number(useParams()?.id)

  const card = data.find((card) => card.pk === cardPk)

  const { country, city, description, price, features_on, features_off } = card

  return (
    <PageWrapper>
      <div className={classes.nav}>
        <Link to="/" className={classes.back}>
          <BackArrow />
        </Link>
        <Logo />
      </div>
      <h3 className={classes.location}>
        {country} → {city}
      </h3>
      <p className={classes.price}>$ {price} / month</p>
      <p className={classes.description}>{description}</p>
      <CardImage card={card} />
      <h4 className={classes.title}>Что есть внутри?</h4>
      <ul className={classes.list}>
        {features_on.split(', ').map((item) => (
          <li className={classes.featureOn} key={item}>
            <TickIcon />
            {item}
          </li>
        ))}
        {features_off.split(', ').map((item) => (
          <li className={classes.featureOff} key={item}>
            <OffIcon />
            {item}
          </li>
        ))}
      </ul>
      <Button className={classes.btn}>Показать контактную информацию</Button>
    </PageWrapper>
  )
}

export default CardPage
