import '@fortawesome/fontawesome-svg-core/styles.css' // Import FontAwesome CSS
import styles from '../styles/page.module.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import WelcomePage from './Authentication/WelcomePage/page'

// Prevent FontAwesome from adding its CSS dynamically (we did this manually in _app.js)
config.autoAddCss = false

export default function Home() {
  return (
    <main className={styles.main}>
      <WelcomePage />
    </main>
  )
}
