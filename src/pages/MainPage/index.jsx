import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useState } from 'react'
import PageWrapper from '../../components/PageWrapper'
import Logo from '../../components/Ui/Logo'
import Button from '../../components/Ui/Button'
import Cards from '../../components/Cards'
import Filter from '../../components/Filter'
import ScrollToTop from '../../components/ScrollToTop'
import Skeleton from '../../components/Skeleton'
import { URL_API } from '../../utils/constants'
import classes from './index.module.css'

const MainPage = () => {
  const {
    isLoading,
    isError,
    data: cards,
  } = useQuery('cardsData', async () => {
    const response = await fetch(URL_API)
    return await response.json()
  })

  const [filterShown, setFilterShown] = useState(false)

  const handleFilterToggle = () => {
    setFilterShown(true)
  }

  return (
    <PageWrapper>
      <ScrollToTop />
      <nav className={classes.nav}>
        <Logo />
        <Link to="/about" className={classes.link}>
          <p>О проекте</p>
        </Link>
      </nav>
      <h1 className={classes.title}>Пора переезжать?</h1>
      <h2 className={classes.subtitle}>
        Находите места для жизни и работы по всему миру
      </h2>
      {!filterShown && (
        <Button onClick={handleFilterToggle}>Подобрать недвижимость</Button>
      )}
      {filterShown && <Filter data={cards} />}
      {isLoading && <Skeleton />}
      {!isLoading && isError && (
        <p>Произошла ошибка, не удалось загрузить данные.</p>
      )}
      {cards && <Cards cards={cards} />}
    </PageWrapper>
  )
}

export default MainPage
