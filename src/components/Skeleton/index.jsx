import getSkeletonArray from '../../utils/getSkeletonArray'
import classes from './index.module.css'

const Skeleton = () => {
  return (
    <div className={classes.content}>
      {getSkeletonArray().map((item) => (
        <div className={classes.skeletonWrapper} key={item}>
          <div className={classes.wrapper}></div>
          <div>
            <h3 className={classes.location}>Загрузка...</h3>
            <p className={classes.description}>Загрузка...</p>
            <p className={classes.price}>Загрузка...</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skeleton
