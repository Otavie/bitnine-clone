import './assets/styles/general.css'
import './assets/styles/header.css'
import './assets/styles/landing.css'
import './assets/styles/agens-enterprise.css'
import './assets/styles/key-features.css'
import './assets/styles/agens-sql-db.css'
import './assets/styles/enterprise-package.css'
import './assets/styles/footer.css'
import './assets/styles/products.css'
import './assets/styles/enterprise-graph-database.css'

import './assets/js/header.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faYoutube, faLinkedinIn, faFacebook, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faXmark, faChevronUp } from '@fortawesome/free-solid-svg-icons'
library.add(faGithub, faYoutube, faLinkedinIn, faFacebook, faMediumM, faSearch, faXmark, faChevronUp );

const app = createApp(App)

app.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')