const files = require.context('.', true, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default {
  label: 'Portuguese (BR)',
  code: 'pt-BR',
  flag: 'BR',
  translations: {
    ...modules
  }
}
