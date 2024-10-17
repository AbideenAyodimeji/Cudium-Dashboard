import { library } from '@fortawesome/fontawesome-svg-core'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'

// Prevent automatic adding of CSS by FontAwesome
config.autoAddCss = false

// Add all icons to the library so you can use them throughout your project
library.add(faEyeSlash, faEye)
