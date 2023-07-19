import styles from './Image.module.css'

export default function Image(props) {
  return (
    <div className="col-sm-12 col-md-6" id={styles.imagecontainer}>
      <div className={styles.image}  style={{ backgroundImage: `url(${props?.url})`}}></div>
    </div>
  )
}
