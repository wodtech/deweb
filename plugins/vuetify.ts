import {createVuetify, ThemeDefinition} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'
import {defineNuxtPlugin} from "#app/nuxt";


export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    customVariables: ['~/assets/styles/variables.scss'],
    treeShake: true,
    options: {
      customProperties: true,
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#E94485',
            accent: '#E94485',
            secondary: '#393939'
          }
        } as ThemeDefinition,
      }
    },
    defaults: {
      VBtn: {
      },
    }
  })

  nuxtApp.vueApp.use(vuetify)
  
})