const fs = require( 'fs' );
const { flushCompileCache } = require( 'module' );
const path = require( 'path' );

// Function to read JSON from file
const readJson = ( filepath ) => {
  const langPath = path.join( filepath );
  const langFileContent = fs.readFileSync( langPath, 'utf8' );

  // parse the JSON content into a JavaScript object
  const translations = JSON.parse( langFileContent );

  return translations
};


// Function to build a nested array from .lang files
const buildNestedArray = ( directory ) => {
  const files = fs.readdirSync( directory ).filter( file => file.endsWith( '.lang' ) );
  const nestedArray = {};

  files.forEach( file => {

    const filePath = path.join( directory, file );
    const fileKey = path.basename( file, '.lang' );

    try {
      console.log( `Reading file: ${filePath}` );
      nestedArray[ fileKey ] = readJson( filePath );
    } catch ( error ) {
      console.error( `Error reading file ${filePath}:`, error );
    }
  } );


  return nestedArray;
};

const getLanguageDirectoriesWithNeoDir = ( languages ) => {
  const baseDir = path.join( __dirname, '../' );
  const languageFolders = [];

  languages.forEach( lang => {
    const langDir = path.join( baseDir, lang, 'neo' );
    if ( fs.existsSync( langDir ) && fs.lstatSync( langDir ).isDirectory() ) {
      languageFolders.push( lang );
    }
  } );
  return languageFolders;
}

const buildLanguagesFromTranslationDirectories = ( languages ) => {
  const baseDir = path.join( __dirname, '../' );
  const builtLanguages = {};

  languages.forEach( lang => {
    const langDir = path.join( baseDir, lang, 'neo' );
    if ( fs.existsSync( langDir ) && fs.lstatSync( langDir ).isDirectory() ) {
      builtLanguages[ lang ] = buildNestedArray( langDir );
    }
  } );
  return builtLanguages;
};

// Build the nested array from en-GB/neo directory
const enGBTranslations = buildNestedArray( path.join( __dirname, '../en-GB/neo' ) );

let definedLanguages = [
  'de', 'fr-BE', 'it', 'nl-BE', 'no'
];

const languageFolders = getLanguageDirectoriesWithNeoDir( definedLanguages );

let builtLanguages = buildLanguagesFromTranslationDirectories( languageFolders );

console.info( builtLanguages );

console.table( 'Translations', buildNestedArray );
console.info( builtLanguages );


console.info( 'All translations checked.' );