import { readdirSync, writeFileSync } from 'fs'

const getDirectories = source =>
    readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.') && dirent.name !== 'data')
        .map(dirent => dirent.name)

const dirs = getDirectories('./')

for (const dir of dirs) {
        const data = (await import(`./${dir}/index.js`)).default
        
        writeFileSync(`./${dir}/${dir}.json`, JSON.stringify(data, null, 4))
}