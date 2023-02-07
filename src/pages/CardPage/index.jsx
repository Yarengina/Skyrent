import { useParams } from 'react-router-dom'
import { useState } from 'react'
import PageWrapper from '../../components/PageWrapper'
import LogoBack from '../../components/LogoBack'
import CardImage from '../../components/CardImage'
import Button from '../../components/Ui/Button'
import TickIcon from '../../components/Icons/TickIcon'
import OffIcon from '../../components/Icons/OffIcon'
import Contacts from '../../components/Contacts'
import ScrollToTop from '../../components/ScrollToTop'
import data from '../../data.json'
import classes from './index.module.css'

const CardPage = () => {
  const cardPk = Number(useParams()?.id)

  const card = data.find((card) => card.pk === cardPk)

  const { country, city, description, price, features_on, features_off } = card

  const [contactsShown, setContactsShown] = useState(false)

  const handleContactsToggle = () => {
    setContactsShown(true)
  }

  return (
    <PageWrapper>
      <ScrollToTop />
      <LogoBack />
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
      {!contactsShown && (
        <Button className={classes.btn} onClick={handleContactsToggle}>
          Показать контактную информацию
        </Button>
      )}
      {contactsShown && <Contacts card={card} />}
    </PageWrapper>
  )
}

export default CardPage
