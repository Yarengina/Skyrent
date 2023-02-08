import PageWrapper from '../../components/PageWrapper'
import LogoBack from '../../components/LogoBack'
import TickIcon from '../../components/Icons/TickIcon'
import classes from './index.module.css'

const AboutPage = () => {
  return (
    <PageWrapper>
      <LogoBack />
      <p className={classes.description}>
        Skyrent – MVP сервиса доски объявлений по длительной аренде жилья для
        релокации. Позволяет просматривать карточку, фильтровать и просматривать
        контакты арендатора.
      </p>
      <h4 className={classes.title}>Над проектом работали:</h4>
      <ul className={classes.list}>
        <li className={classes.collaborator}>
          <TickIcon />
          <span className={classes.name}>Frontend&nbsp;</span>
          <a
            href="https://github.com/Yarengina"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            @Lyubov_Yarengina
          </a>
        </li>
        <li className={classes.collaborator}>
          <TickIcon />
          <span className={classes.name}>Backend&nbsp;</span>
          <a
            href="https://github.com/gmoroz"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            @zoromg
          </a>
        </li>
        <li className={classes.collaborator}>
          <TickIcon />
          <span className={classes.name}>QA&nbsp;</span>
          <a
            href="https://github.com/tyurnev"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            @tyurnev
          </a>
        </li>
      </ul>
    </PageWrapper>
  )
}

export default AboutPage
