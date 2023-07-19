import styles from './Content.module.css'
import { Instagram, Youtube, Mailbox2 } from 'react-bootstrap-icons';
import ReactMarkdown from 'react-markdown'


export default function Content(props) {
  return (
    <div class="col-sm-12 col-md-6" id={styles.container}>
          <h5 className={styles.name}>{props?.name}</h5>
          <h5 className={styles.title}>{props?.title}</h5>
          <ReactMarkdown children={props?.description} />
          <div className={styles.socials}>
            {
              props?.socials.map(el =>{
                const Icon = { instagram: Instagram,  youtube: Youtube,  email: Mailbox2 }[el?.type]
                return (
                <a className={styles.iconLink} href={el?.url}  target="_blank">
                    <Icon size={20} color="#444" />
                </a>
              )})
            }
          </div>
    </div>
  )
}
