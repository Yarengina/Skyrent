/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useState, useEffect } from 'react'
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
  const { isLoading, isError, data } = useQuery('cardsData', async () => {
    const response = await fetch(URL_API)
    return await response.json()
  })

  const [location, setLocation] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const [items, setItems] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [filterShown, setFilterShown] = useState(false)

  const {
    data: filteredData,
    isLoading: isLoadingFiltered,
    isError: isErrorFiltered,
    refetch: refetchFiltered,
    isFetching: isFetchingFiltered,
  } = useQuery(
    ['filteredData', location, minPrice, maxPrice],
    async () => {
      return fetch(
        `${URL_API}?${new URLSearchParams({
          city: location.split(' → ')[1] || '',
          from: minPrice || '',
          to: maxPrice || '',
        })}`
      ).then((response) => response.json())
    },
    { enabled: false }
  )

  useEffect(() => {
    if (location || maxPrice || minPrice) {
      refetchFiltered()
      filteredData?.length ? setItems(filteredData) : setItems([])
      return
    }

    if (data?.length) {
      setItems(data)
      return
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, filteredData])

  useEffect(() => {
    isLoading || isLoadingFiltered || isFetchingFiltered
      ? setLoading(true)
      : setLoading(false)
    isError || isErrorFiltered ? setError(true) : setError(false)
  }, [
    isLoading,
    isLoadingFiltered,
    isFetchingFiltered,
    isError,
    isErrorFiltered,
  ])

  const filterProps = {
    data,
    setItems,
    setError,
    setLoading,
  }

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
      {filterShown && <Filter {...filterProps} />}
      {loading && <Skeleton />}
      {!loading && error && (
        <p className={classes.error}>
          Произошла ошибка, не удалось загрузить данные.
        </p>
      )}
      {items && <Cards cards={items} />}
      {!loading && !error && items.length === 0 && (
        <p className={classes.message}>
          Не найдено. Попробуйте изменить параметры.
        </p>
      )}
    </PageWrapper>
  )
}

export default MainPage
