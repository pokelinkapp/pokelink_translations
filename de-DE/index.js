const files = require.context('.', true, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default {
  label: 'Deutsch (DE)',
  code: 'de-DE',
  flag: 'DE',
  translations: {
    ...modules
  }
}
