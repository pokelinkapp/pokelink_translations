export default {
  'Titles': {
    'Session': 'Spill Instillinger',
    'System': 'System Instillinger',
    'Window': 'Vindu Instillinger',
    'ViewLogs': 'View Logs',
    'Connections': 'Connections',
    'Accessibility': 'Tilgjengelighets Instillinger',
    'GameAndEmulator': 'Spill og Emulator Instillinger'
  },
  'Fields': {
    'SessionName': {
      'Title': 'Spill Navn',
      'Description': 'Endre navnet på dette spillet'
    },
    'EmulatorLocation': {
      'Title': 'Emulator Lokasjon',
      'Description': 'Endre ruten for emulatoren din'
    },
    'RomLocation': {
      'Title': 'ROM Lokasjon',
      'Description': 'Endre ruten til denne filen'
    },
    'RevealEggs': {
      'Title': 'Avslør Egg',
      'Description': 'Skal et eggs innhold bli avslørt i lag skjermen'
    },
    'SendToTray': {
      'Title': 'Send til oppgavelinje istedenfor å lukke appen',
      'Description': 'Istedenfor å lukke appen når du trykker på X, send vinduet til Oppgavelinjen'
    },
    'AllowErrorReporting': {
      'Title': 'Tillat Pokélink å automatisk sende feilmeldinger',
      'Description': 'Å slå av denne hindrer appen å sende anonym data når en feil oppstår'
    },
    'AutomaticallyBootEmulator': {
      'Title': 'Starter automatisk opp emulator når du gjenopptar et spill',
      'Description': 'Slå av denne om du heller vil starte emulatoren manuelt'
    },
    'EnableDyslexiaFont': {
      'Title': 'Aktiver Dysleksi Skrift',
      'Description': 'Aktiver skrift (bare i appen) som gjør det lettere å lese med dysleksi'
    },
    'EnableDarkMode': {
      'Title': 'Aktiver Mørk Modus',
      'Description': 'Tilfredsstill øynene med et mørkere fargevalg'
    },
    'TwitchBot': {
      'Title': 'Twitch Bot'
    },
    'TwitchBotLogin': {
      'Title': 'Twitch Bot Login',
      'Description': 'Connect your Twitch account to enable Twitch-integrated features'
    },
    'TwitchBotStatus': {
      'Title': 'Twitch Bot Status',
      'Description': 'Stop & Start the bot'
    },
    'TwitchBotCommands': {
      'Title': 'Customise the Bot Command names',
      'Description': 'Change the commands that the this Twitch Bot will respond to'
    }
  },
  'Actions': {
    'Connections': {
      'TwitchAccount': {
        'Login': 'Login With your twitch account',
        'Logout': 'Disconnect your twitch account',
        'LoggedInAs': 'Logged in as {twitchName}'
      },
      'TwitchBotStatus': {
        'Start': 'Start Bot',
        'Stop': 'Stop Bot'
      }
    }
  },
  'Connections': {
    'TwitchBot': {
      'Commands': {
        'listCommands': 'The command used to list available commands',
        'team': 'The command that will list your team',
        'stats': 'The command that will show the stats of a specific pokemon in your party',
        'evs': 'The command that will show the evs of a specific pokemon in your party',
        'ivs': 'The command that will show the ivs of a specific pokemon in your party',
        'ability': 'The command that will show the ability of a specific pokemon in your party',
        'nature': 'The command that will show the nature of a specific pokemon in your party',
        'faster': 'The command that will show which pokemon is faster between your pokemon and a specified Pokemon species',
        'moves': 'The command that will show the current moves of a specific pokemon in your party',
        'deaths': 'The command that will show the deaths that pokelink has tracked for this session'
      }
    }
  }
}
