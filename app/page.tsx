import Image from 'next/image'
import muh_image from '../public/OIP.jpg'
import styles from './page.module.css'

export default function Test() {
  return <div>
    <Image
      src={muh_image}
      alt="muh_image"
    />
    <div className={styles.muh_class} />
  </div >
}
