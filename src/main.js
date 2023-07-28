import './assets/styles/style.css'
import './assets/styles/header.css'
import './assets/styles/landing.css'
import './assets/styles/agens-enterprise.css'
import './assets/styles/key-features.css'
import './assets/styles/agens-sql-db.css'
import './assets/styles/enterprise-package.css'
import './assets/styles/footer.css'

import './assets/js/header.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faYoutube, faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faM, faXmark, faChevronUp } from '@fortawesome/free-solid-svg-icons'
library.add(faGithub, faYoutube, faLinkedinIn, faFacebook, faM, faSearch, faXmark, faChevronUp );

const app = createApp(App)

app.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')