import { readdirSync, writeFileSync } from 'fs'

const getDirectories = source =>
    readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.') && dirent.name !== 'data')
        .map(dirent => dirent.name)

const dirs = getDirectories('./')

for (const dir of dirs) {
    if (dir === 'neo') {
        continue
    }
    const data = (await import(`./${dir}/index.js`)).default

    var metaData = {
        code: data.code,
        flag: data.flag,
        label: data.label
    }

    writeFileSync(`./neo/${dir}/meta.lang`, JSON.stringify(metaData, null, 4))

    for (let module in data.translations) {
        let moduleData = {
            code: data.code,
            translations: {
            }
        }

        moduleData.translations[`${module}`] = data.translations[module]
        let fileName = module;

        fileName = fileName.substring(0, 1).toLowerCase() + fileName.substring(1)

        writeFileSync(`./neo/${dir}/${fileName}.lang`, JSON.stringify(moduleData, null, 4))
    }
}
