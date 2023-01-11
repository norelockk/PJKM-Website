// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const pjktTheme = {
	dark: true,
	colors: {
		background: '#000000',
		surface: '#000000',
		primary: '#00C6FF',
		'primary-darken-1': '#107CCD',
		secondary: '#A400FF',
		'secondary-darken-1': '#6800FF',
		accent: '#FFE400',
		error: '#B00020',
		info: '#2196F3',
		success: '#4CAF50',
		warning: '#FB8C00',
	},
}

export default createVuetify({
	theme: {
    defaultTheme: 'pjktTheme',
    themes: {
      pjktTheme
    }
	},
})
