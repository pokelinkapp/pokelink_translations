const fs = require( 'fs' ).promises;
const { readFileSync } = require( 'fs' );
const path = require( 'path' );

const BASE_LANG = 'en-GB';
const ROOT_DIR = path.resolve( __dirname, '..' );
// Directories to ignore when looking for language folders
const IGNORE_DIRS = new Set( [ '.git', '.github', '.husky', '.vscode', 'build', 'node_modules', 'old' ] );

/**
 * Flattens a nested object into a single level with dot-separated keys.
 * @param {object} obj The object to flatten.
 * @param {string} prefix The prefix to use for the keys.
 * @returns {object} The flattened object.
 */
function flattenObject ( obj, prefix = '' ) {
    return Object.keys( obj ).reduce( ( acc, k ) => {
        const pre = prefix.length ? prefix + '.' : '';
        if ( typeof obj[ k ] === 'object' && obj[ k ] !== null && !Array.isArray( obj[ k ] ) ) {
            Object.assign( acc, flattenObject( obj[ k ], pre + k ) );
        } else {
            acc[ pre + k ] = obj[ k ];
        }
        return acc;
    }, {} );
}

/**
 * Recursively finds all .lang files in a directory.
 * @param {string} dir The directory to search.
 * @returns {Promise<string[]>} A list of full paths to .lang files.
 */
async function getLangFiles ( dir ) {
    let files = [];
    try {
        const entries = await fs.readdir( dir, { withFileTypes: true } );
        for ( const entry of entries ) {
            const fullPath = path.join( dir, entry.name );
            if ( entry.isDirectory() ) {
                files = files.concat( await getLangFiles( fullPath ) );
            } else if ( entry.isFile() && entry.name.endsWith( '.lang' ) ) {
                files.push( fullPath );
            }
        }
    } catch ( error ) {
        // Ignore directories that don't exist (e.g., for a new language)
        if ( error.code !== 'ENOENT' ) {
            throw error;
        }
    }
    return files;
}

/**
 * Loads and flattens all translations for a given language code.
 * @param {string} langCode The language code (e.g., 'de', 'es-ES').
 * @returns {Promise<object>} A flattened object of all translations for the language.
 */
async function loadAllTranslations ( langCode ) {
    const langDir = path.join( ROOT_DIR, langCode );
    const langFiles = await getLangFiles( langDir );
    let allTranslations = {};

    for ( const file of langFiles ) {
        try {

            const data = readFileSync( file, 'utf8' );

            // Trim whitespace from the beginning and end of the JSON data
            const trimmedData = data.trim();

            // Use a more robust JSON parser (parse-json) for better handling of formatting issues
            const json = JSON.parse( trimmedData );

            // Use the relative path of the file as a key to ensure uniqueness
            const fileKey = path.relative( langDir, file ).replace( '.lang', '' ).replace( /\\/g, '/' );
            const flattened = flattenObject( json.translations || {} );

            for ( const key in flattened ) {
                allTranslations[ `${fileKey}.${key}` ] = flattened[ key ];
            }
        } catch ( e ) {
            console.error( `[Error] Failed to parse or read "${file}": ${e.message}` );
        }
    }
    return allTranslations;
}

/**
 * The main function to generate and output the report.
 */
async function main () {
    console.log( `Using '${BASE_LANG}' as the source language for comparison.` );
    const sourceTranslations = await loadAllTranslations( BASE_LANG );
    const totalKeys = Object.keys( sourceTranslations ).length;
    console.log( `Found ${totalKeys} total translation keys in '${BASE_LANG}'.\n` );

    const dirents = await fs.readdir( ROOT_DIR, { withFileTypes: true } );
    const langCodes = dirents
        .filter( dirent => dirent.isDirectory() && !IGNORE_DIRS.has( dirent.name ) )
        .map( dirent => dirent.name );

    const report = {};

    for ( const langCode of langCodes ) {
        if ( langCode === BASE_LANG ) continue;

        console.log( `Processing language: ${langCode}` );
        const targetTranslations = await loadAllTranslations( langCode );

        const missing_keys = [];
        const identical_keys = [];

        for ( const key in sourceTranslations ) {
            if ( !targetTranslations.hasOwnProperty( key ) || String( targetTranslations[ key ] ).trim() === '' ) {
                missing_keys.push( key );
            } else if ( String( targetTranslations[ key ] ).trim() === String( sourceTranslations[ key ] ).trim() ) {
                identical_keys.push( key );
            }
        }

        const translated = totalKeys - missing_keys.length;
        const progress = totalKeys > 0 ? ( translated / totalKeys ) * 100 : 0;
        const identicalPercentage = totalKeys > 0 ? ( identical_keys.length / totalKeys ) * 100 : 0;

        report[ langCode ] = {
            progress: {
                percentage: parseFloat( progress.toFixed( 2 ) ),
                translated_count: translated,
                missing_count: missing_keys.length,
                missing_keys: missing_keys
            },
            identical_to_english: {
                percentage: parseFloat( identicalPercentage.toFixed( 2 ) ),
                identical_count: identical_keys.length,
                identical_keys: identical_keys
            }
        };
    }

    const outputArg = process.argv[ 2 ];
    const reportJson = JSON.stringify( report, null, 2 );

    if ( outputArg ) {
        const outputPath = path.resolve( outputArg );
        await fs.writeFile( outputPath, reportJson );
        console.log( `\nReport successfully generated at: ${outputPath}` );
    } else {
        console.log( '\n--- Translation Progress Report ---' );
        console.log( reportJson );
    }
}

main().catch( error => {
    console.error( '\nAn unexpected error occurred:', error );
    process.exit( 1 );
} );