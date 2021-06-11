export default {
  'Titles': {
    'Session': 'Session-Einstellungen',
    'System': 'System-Einstellungen',
    'Window': 'Fenstereinstellungen',
    'Accessibility': 'Einstellungen zur Barrierefreiheit',
    'GameAndEmulator': 'Spiel- & Emulator-Einstellungen',
    'ViewLogs': 'View Logs',
    'Connections': 'Connections'
  },
  'Fields': {
    'SessionName': {
      'Title': 'Session-Name',
      'Description': 'Bearbeite den Namen dieser Session'
    },
    'EmulatorLocation': {
      'Title': 'Ort des Emulators',
      'Description': 'Passe den Dateipfad deines Emulators an'
    },
    'RomLocation': {
      'Title': 'Ort der Rom',
      'Description': 'Passe den Dateipfad deiner Rom an'
    },
    'RevealEggs': {
      'Title': 'Eier enthüllen',
      'Description': 'Ob der Inhalt eines Eis im Teambildschirm angezeigt werden soll'
    },
    'SendToTray': {
      'Title': 'Minimieren anstatt zu schließen',
      'Description': 'Anstatt das Programm zu schließen, wenn das X angeklickt wird, wird es minimiert'
    },
    'AllowErrorReporting': {
      'Title': 'Pokélink erlauben automatisch Fehlermeldungen zu senden',
      'Description': 'Das Deaktivieren dieser Option verhindert es, dass die Apps anonymisierte Daten an die Entwickler schickt, wenn Bugs auftreten'
    },
    'AutomaticallyBootEmulator': {
      'Title': 'Automatisch den Emulator starten, wenn eine Session wieder aufgenommen wird',
      'Description': 'Deaktiviere diese Option, falls du den Emulator lieber selber starten willst'
    },
    'EnableDyslexiaFont': {
      'Title': 'Schriftart für Legastheniker aktivieren',
      'Description': 'Schriftart aktivieren (nur in der App), die Legasthenikern das Lesen erleichtert'
    },
    'EnableDarkMode': {
      'Title': 'Aktivierung dunkler Modus',
      'Description': 'Tu deinen Augen einen Gefallen mit dem Aktivieren des dunklen Themes'
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