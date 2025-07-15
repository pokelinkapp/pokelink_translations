const fs = require( 'fs' );
const path = require( 'path' );

// Function to read JSON from file
const readJson = ( filepath ) => {
  try {
    const data = fs.readFileSync( filepath, 'utf8' );

    // Trim whitespace from the beginning and end of the JSON data
    const trimmedData = data.trim();

    // Use a more robust JSON parser (parse-json) for better handling of formatting issues
    return JSON.parse( trimmedData );
  } catch ( error ) {
    console.error( `Error reading file ${filepath}:`, error.message );
    throw error;
  }
};

// Function to build a nested array from the JSON content of all .lang files in a directory
const buildNestedArray = ( directory ) => {
  const files = fs.readdirSync( directory ).filter( file => file.endsWith( '.lang' ) );
  const nestedArray = {};
  files.forEach( file => {
    const filePath = path.join( directory, file );
    const fileKey = path.basename( file, '.lang' ); // Remove the .lang extension
    try {
      // console.log( `Reading file: ${filePath}` );
      nestedArray[ fileKey ] = readJson( filePath );
    } catch ( error ) {
      console.error( `Error reading file ${filePath}:`, error );
    }
  } );
  return nestedArray;
};

const addMissingKeysToDestinationObject = ( source, destination ) => {
  for ( const key in source ) {
    if (destination.constructor === Array) {
      continue
    }
    if ( source.hasOwnProperty( key ) ) {
      if ( !destination.hasOwnProperty( key ) ) {
        destination[ key ] = source[ key ];
      } else if ( typeof source[ key ] === 'object' && typeof destination[ key ] === 'object' ) {
        addMissingKeysToDestinationObject( source[ key ], destination[ key ] );
      }
    }
  }
}

const getLanguageDirectoriesWithNeoDir = () => {
  const baseDir = path.join( __dirname, '../' );
  const languageFolders = fs.readdirSync( baseDir ).filter( dir => {
    const langDir = path.join( baseDir, dir, '0.7.0' );
    return fs.existsSync( langDir ) && fs.lstatSync( langDir ).isDirectory();
  } );
  return languageFolders;
};

const calculateNewlyAddedKeys = ( originLanguage, targetLanguage ) => {
  const newKeys = {};

  for ( const key in originLanguage ) {
    if ( !targetLanguage.hasOwnProperty( key ) ) {
      newKeys[ key ] = originLanguage[ key ];
    } else if ( typeof originLanguage[ key ] === 'object' && typeof targetLanguage[ key ] === 'object' ) {
      const nestedNewKeys = calculateNewlyAddedKeys( targetLanguage[ key ], originLanguage[ key ] );
      if ( Object.keys( nestedNewKeys ).length > 0 ) {
        newKeys[ key ] = nestedNewKeys;
      }
    }
  }

  return newKeys;
};

const formatKeyPaths = ( obj, prefix = '' ) => {
  let result = {};

  for ( const key in obj ) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if ( typeof obj[ key ] === 'object' && !Array.isArray( obj[ key ] ) && obj[ key ] !== null ) {
      Object.assign( result, formatKeyPaths( obj[ key ], newKey ) );
    } else {
      result[ newKey ] = obj[ key ];
    }
  }

  return result;
};

const processLanguageDirectory = ( fromOriginLanguage, language ) => {
  const currentTranslationLanguage = buildNestedArray( path.join( __dirname, '../' + language + '/0.7.0' ) );

  // Calculate and log newly added keys before adding missing keys
  const newKeys = calculateNewlyAddedKeys( fromOriginLanguage, currentTranslationLanguage );
  if ( Object.keys( newKeys ).length > 0 ) {
    // console.log( '\n\nNewly added keys in' + language + ':\n' );
    const formattedKeys = formatKeyPaths( newKeys );
    Object.keys( formattedKeys ).sort().forEach( key => {
      console.log( `${language}: ${key}` );
    } );
  }

  addMissingKeysToDestinationObject( fromOriginLanguage, currentTranslationLanguage );
  writeNeoTranslationsToLanguageDirectoryStructure( currentTranslationLanguage, language );
};

const writeNeoTranslationsToLanguageDirectoryStructure = ( translations, language ) => {
  const languageNeoDir = path.join( __dirname, '../', language, '0.7.0' );

  // Create the base directory if it doesn't exist
  if ( !fs.existsSync( languageNeoDir ) ) {
    fs.mkdirSync( languageNeoDir, { recursive: true } );
  }

  // Write each translation to its respective .lang file
  for ( const key in translations ) {
    if ( translations.hasOwnProperty( key ) ) {
      const filePath = path.join( languageNeoDir, `${key}.lang` );
      try {
        let langfileContent = {
          ...translations[ key ],
          code: language,
        };
        fs.writeFileSync( filePath, JSON.stringify( langfileContent, null, 2 ) );
        // console.log( `Written ${filePath}` );
      } catch ( error ) {
        console.error( `Error writing file ${filePath}:`, error );
      }
    }
  }
}

const enGBTranslations = buildNestedArray( path.join( __dirname, '../en-GB/0.7.0' ) );
const languageFolders = getLanguageDirectoriesWithNeoDir();

languageFolders.forEach( language => {
  if ( language !== 'en-GB' ) {
    processLanguageDirectory( enGBTranslations, language );
  }
} );
