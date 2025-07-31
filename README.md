# Translations for the Pokélink Streaming app

## Structure

Each language is represented by the two character [ISO-3166-2 country code](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/iso-3166-2) (with an optional 2 character subdivision code appended, separated by a hyphen/dash  `-` if needed, e.g. `en-GB` for British English). Each language folder contains a versioned subfolder, which in turn contains the translation files for that version of Pokélink.

Within each of these files, there's a heirachical tree of keys, with any "String" values being the only change normally needed to be made.

The file structure looks like this:
```
./en-GB/
├── badges.lang - This is a root translation file
├── 0.7.0 - A folder containing translations for a specific version of Pokélink
│   ├── badges.lang - A translation file for badges - specific to this version
```

Checkout this [CONTRIBUTE.md](CONTRIBUTE.md) file for more detailed instructions on how to contribute translations.

## Adding a new langauge

 - Fork the repository
 - Duplicate an existing folder, `en-GB` would be the best suggestion
 - Name your new language folder the two letter country language code from ISO-3166-2
 - Edit the simple metadata in your language's specific meta.lang file.
 - Translate
 - Submit a pull request

## Updating existing language translation strings

 - Fork the repository
 - Open the folder for your language
 - Going through each file, check for any values that are not translated, or that need updating
   - If you find any, edit the file and update the value
 - Translate
 - Submit a pull request