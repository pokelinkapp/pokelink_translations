export default {
  'Titles': {
    'Session': 'Impostazioni Sessione',
    'System': 'Impostazioni Sistema',
    'Window': 'Impostazioni Finestra',
    'ViewLogs': 'Apri i Logs',
    'Connections': 'Connessioni',
    'Accessibility': 'Impostazioni Accessibilità',
    'GameAndEmulator': 'Impostazioni Giochi & Emulatori'
  },
  'Fields': {
    'SessionName': {
      'Title': 'Nome Sessione',
      'Description': 'Cambia il nome della sessione'
    },
    'EmulatorLocation': {
      'Title': 'Posizione Emulatore',
      'Description': 'Cambia la posizione del tuo emulatore'
    },
    'RomLocation': {
      'Title': 'Posizione ROM',
      'Description': 'Cambia la posizione della tua ROM'
    },
    'RevealEggs': {
      'Title': 'Mostra Uova',
      'Description': 'Se attivo, il contenuto di un uovo sarà mostrato nella schermata della squadra'
    },
    'SendToTray': {
      'Title': 'Mostra nella sezione icone invece di chiudere l\'appicazione',
      'Description': 'Premendo X l\'applicazione, invece di essere chiusa, sarà minimizzata nella sezione icone'
    },
    'AllowErrorReporting': {
      'Title': 'Autorizza Pokélink ad inviare automaticamente report di errori',
      'Description': 'Se disabilitato l\'applicazione non invierà dati in maniera anonima quando un bug viene rilevato'
    },
    'AutomaticallyBootEmulator': {
      'Title': 'Avvia automaticamente l\'emulatore quando una sessione viene ripresa',
      'Description': 'Disabilita questa opzione se preferisci avviare l\'emulatore manualmente'
    },
    'EnableDyslexiaFont': {
      'Title': 'Abilita i font per dislessici',
      'Description': 'Abilita i font ottimizzati per persone con problemi di dislessia (solo all\'interno dell\'applicazione)'
    },
    'EnableDarkMode': {
      'Title': 'Abilita Dark Mode',
      // TODO: Continue from here
      'Description': 'Appaga i tuoi '
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
      'Description': 'Change the commands that the Twitch Bot will respond to'
    }
  },
  'Actions': {
    'Connections': {
      'TwitchAccount': {
        'Login': 'Login with your Twitch account',
        'Logout': 'Disconnect your Twitch account',
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
        'stats': 'The command that will show the stats of a specific Pokémon in your party',
        'evs': 'The command that will show the evs of a specific Pokémon in your party',
        'ivs': 'The command that will show the ivs of a specific Pokémon in your party',
        'ability': 'The command that will show the ability of a specific Pokémon in your party',
        'nature': 'The command that will show the nature of a specific Pokémon in your party',
        'faster': 'The command that will show which Pokémon is faster between your Pokémon and a specified Pokémon species',
        'moves': 'The command that will show the current moves of a specific Pokémon in your party',
        'deaths': 'The command that will show the deaths that Pokélink has tracked for this session'
      }
    }
  }
}
