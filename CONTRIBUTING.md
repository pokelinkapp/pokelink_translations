# Contributing to Pokélink Translations

First off, thank you for considering contributing to the Pokélink translation project! Your help is incredibly valuable in making the app accessible to a wider audience.

We are always looking for new languages to add and for help keeping existing translations up-to-date.

## How to Contribute

You don't need to be a programmer to help with translations! Here’s how you can get started:

### Understanding the `.lang` Files

The translation files (`.lang`) are simple text files that can be opened in any text editor. They are formatted in a structure called JSON.

When you open a `.lang` file, you will see two main parts: a `code` and `translations`. You should **only** modify the text within the `translations` section.

Let's look at an example from the `en-GB/party.lang` file, which handles text related to the Pokémon party screen:

```json
{
    "code": "en-GB",
    "translations": {
        "Party": {
            "Pokemon": {
                "Attribute": {
                    "Held Item": "Held Item",
                    "Level": "Level",
                    "Gender": "Gender",
                    "Ability": "Ability",
                    "Nature": "Nature"
                }
            }
        }
    }
}
```

Your job is to translate the text on the right side of the colon (`:`), which is inside the double quotes. This is the "value". The text on the left side is the "key" and **must not be changed**.

For example, if you were translating this file to German (`de`), you would first change the `"code"` at the top of the file from `"en-GB"` to `"de"`. Then, you would translate the values inside the `translations` object like so:

```json
{
    "code": "de",
    "translations": {
        "Party": {
            "Pokemon": {
                "Attribute": {
                    "Held Item": "Getragenes Item",
                    "Level": "Level",
                    "Gender": "Geschlecht",
                    "Ability": "Fähigkeit",
                    "Nature": "Wesen"
                }
            }
        }
    }
}
```

Notice that only the values (like "Held Item") were changed to their German counterparts (like "Getragenes Item"). The keys (like `"Held Item"`) and the structure of the file were left exactly the same.


### Adding a New Language

1.  **Fork the repository:** This creates your own copy of the project where you can make changes.
2.  **Duplicate an existing language folder:** We recommend using the `en-GB` folder as a template.
3.  **Rename the new folder:** Use the two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code for your language (e.g., `fr` for French, `es` for Spanish).
4.  **Translate the files:** Open each file in your new language folder and translate the text values.
5.  **Submit a pull request:** This will propose your changes to be added to the main project.

### Updating an Existing Language

1.  **Fork the repository:** This creates your own copy of the project where you can make changes.
2.  **Open the folder for your language:** Find the folder with the two-letter country code for your language.
3.  **Update the files:** Look for any text that is untranslated or needs updating and make the necessary changes.
4.  **Submit a pull request:** This will propose your changes to be added to the main project.

## Submitting Your Changes

Once you have made your changes, you can submit a pull request to have them reviewed and added to the project. If you are new to GitHub, you can follow this [step-by-step guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) on how to create a pull request.

Thank you again for your interest in contributing to the Pokélink translation project. We appreciate your support!
