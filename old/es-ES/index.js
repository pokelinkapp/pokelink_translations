import { readdirSync } from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const getFiles = source =>
    readdirSync(source, {withFileTypes: true})
        .filter(fileEnt => fileEnt.isFile() && fileEnt.name.endsWith('.js') && fileEnt.name !== 'index.js')
        .map(fileEnt => fileEnt.name)
const modules = {}

for (const file of getFiles(__dirname)) {
  modules[file.replace(/(\.\/|\.js)/g, '')] = (await import(`${__dirname}/${file}`)).default
}

export default {
  label: 'Español (ES)',
  code: 'es-ES',
  flag: 'ES',
  translations: {
    ...modules
  }
}
