const files = require.context('.', true, /index\.js$/)
const Languages = {}
const messages = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  Languages[key.replace(/(\.\/|\/index\.js)/g, '')] = files(key).default
  messages[key.replace(/(\.\/|\/index\.js)/g, '')] = files(key).default.translations
})

export {
  Languages,
  messages
}
