import classes from './index.module.css'

const SkeletonItem = () => {
  return (
    <>
      <div className={classes.wrapper}></div>
      <h3 className={classes.location}>Загрузка...</h3>
    </>
  )
}

export default SkeletonItem
