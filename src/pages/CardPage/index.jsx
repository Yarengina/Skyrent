import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useQuery } from 'react-query'
import PageWrapper from '../../components/PageWrapper'
import LogoBack from '../../components/LogoBack'
import CardImage from '../../components/CardImage'
import Button from '../../components/Ui/Button'
import TickIcon from '../../components/Icons/TickIcon'
import OffIcon from '../../components/Icons/OffIcon'
import Contacts from '../../components/Contacts'
import ScrollToTop from '../../components/ScrollToTop'
import SkeletonItem from '../../components/SkeletonItem'
import { URL_API } from '../../utils/constants'
import classes from './index.module.css'

const CardPage = () => {
  const cardPk = useParams()?.id || ''

  const [contactsShown, setContactsShown] = useState(false)

  const {
    isLoading,
    isError,
    data: card,
  } = useQuery('cardData', async () => {
    const response = await fetch(`${URL_API}${cardPk}`)
    return await response.json()
  })

  if (isLoading) {
    return (
      <PageWrapper>
        <LogoBack />
        <p className={classes.message}>Загрузка...</p>
        <SkeletonItem />
      </PageWrapper>
    )
  }

  if (isError) {
    return (
      <PageWrapper>
        <LogoBack />
        <p className={classes.message}>
          Произошла ошибка, не удалось загрузить данные.
        </p>
      </PageWrapper>
    )
  }

  const { country, city, description, price, features_on, features_off } = card

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
