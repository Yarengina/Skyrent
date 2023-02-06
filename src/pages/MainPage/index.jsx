import { Link } from 'react-router-dom'
import { useState } from 'react'
import PageWrapper from '../../components/PageWrapper'
import Logo from '../../components/Ui/Logo'
import Button from '../../components/Ui/Button'
import Cards from '../../components/Cards'
import Filter from '../../components/Filter'
import data from '../../data.json'
import classes from './index.module.css'

const MainPage = () => {
  const [filterShown, setFilterShown] = useState(false)

  const handleFilterToggle = () => {
    setFilterShown(true)
  }

  return (
    <PageWrapper>
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
      {filterShown && <Filter />}
      <Cards data={data} />
    </PageWrapper>
  )
}

export default MainPage
