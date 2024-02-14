import { readdirSync, writeFileSync } from 'fs'

const getDirectories = source =>
    readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.') && dirent.name !== 'data')
        .map(dirent => dirent.name)

const dirs = getDirectories('./')

const files = [
    'Alert',
    'Badges',
    'Common',
    'GameIntegration',
    'NuzlockeTools',
    'Party',
    'SessionList',
    'Settings',
    'Setup'
]

for (const dir of dirs) {
    for (const section of files) {
        const data = (await import(`./${dir}/${section}.js`)).default
        
        writeFileSync(`./${dir}/${section}.json`, JSON.stringify(data, null, 4))
    }
}