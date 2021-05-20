# Translations for the Pokélink Streaming app


## Structure

**Important note:** Ignore the `index.js` and `langs.js` files in the root of this repo.

Each language is represented by the two character [ISO-3166-2 country code](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/iso-3166-2) (with an optional 2 character subdivision code appended, separated by a hyphen/dash  `-`

Within each folder, ignoring the `index.js` file - there's a file for each category / context.

Within each of these files, there's a heirachical tree of keys, with any "String" values being the only change normally needed to be made.

```
./en-GB/
   ./Section.js
   
```

## Adding a new langauge 

 - Fork the repository
 - Duplicate an existing folder, `en-GB` would be the best suggestion
 - Name your new language folder the two letter country language code from ISO-3166-2 
 - Edit the simple metadata in your language's specific index.js file.
 - Translate
 - ???
 - Profit
