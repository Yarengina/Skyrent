import getSkeletonArray from '../../utils/getSkeletonArray'
import SkeletonItem from '../SkeletonItem'
import classes from './index.module.css'

const Skeleton = () => {
  return (
    <div className={classes.content}>
      {getSkeletonArray().map((item) => (
        <div className={classes.skeletonWrapper} key={item}>
          <SkeletonItem />
        </div>
      ))}
    </div>
  )
}

export default Skeleton
