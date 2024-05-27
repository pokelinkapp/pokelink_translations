import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Store from '@/store'
import {messages} from './langs'

Vue.use(VueI18n)

const i18nInstance = new VueI18n({
  locale: Store.getters.activeLocale,
  fallbackLocale: 'en-GB', // set locale
  messages // set locale messages
})

export default i18nInstance
