import classes from './index.module.css'

const Contacts = ({ card }) => {
  const { host_name, host_phone, host_location } = card

  return (
    <div className={classes.wrapper}>
      <div>
        <p className={classes.title}>Имя хоста</p>
        <p className={classes.details}>{host_name}</p>
      </div>
      <div>
        <p className={classes.title}>Телефон</p>
        <p className={classes.details}>{host_phone}</p>
      </div>
      <div>
        <p className={classes.title}>Адрес</p>
        <p className={classes.details}>{host_location}</p>
      </div>
    </div>
  )
}

export default Contacts
