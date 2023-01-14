import { createApp } from 'vue'
import { createPinia } from 'pinia'

//FontAwesomeIcon
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDiscord, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
	components,
	directives,
	icons: {
		defaultSet: 'fa',
		aliases,
		sets: {
			fa,
			mdi
		}
	}
})

library.add(faDiscord, faYoutube, faTwitter)

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.mount('#app')
