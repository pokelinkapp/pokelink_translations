export default {
  'step': 'Step {step}',
  'Steps': {
    'SessionName': 'Nom de session',
    'GameSelection': 'Selection du jeu',
    'SetupEmulator': 'Configuration du émulator',
    'ConnectionDetails': 'Détails de connexion'
  },
  'Welcome': {
    'username': 'Nom d\'utilisateur'
  },
  'Details': {
    'GameTypes': {
      'solo': {
        'description': 'Vous jouez seul sans avoir besoin de vous connecter aux autres',
        'title': 'Jeu individuel'
      },
      'multi': {
        'description': 'Vous jouez un jeu avec 1 ou plusieurs des autres joueurs',
        'title': 'Multiplayer'
      },
      'multi_soullink': {
        'description': 'Vous jouez à un lien d\'âme avec 1 ou plusieurs des autres joueurs',
        'title': 'Lien d\'âme Multiplayer'
      },
      'multi_vs': {
        'description': 'Vous jouez un versus avec 1 ou plusieurs des autres joueurs',
        'title': 'Multiplayer versus'
      }
    }
  },
  'SessionDetails': {
    'SessionName': 'Nom de session',
    'Save': 'Continuer avec la configuration de la session',
    'Validation': {
      'SessionNameAndGameOptions': 'Vous devez entrer un nom de session avant de pouvoir continuer'
    }
  },

  'GameSelection': {
    'DetectionTypes': {
      'automatic': {
        'description': 'Si votre jeu est supporté, Pokélink lira les données en direct depuis votre émulateur',
        'title': 'Gestion automatique du parti'
      },
      'manual': {
        'description': 'Vous pouvez modifier manuellement votre équipe à l\'aide d\'une interface simple dans l\'application',
        'title': 'Gestion manuelle du parti'
      }
    }
  },

  'Emulator': {
    'Subtitle': 'Now let\'s check the process is complete',
    'AttemptingToConnect': 'Attempting to detect emulator... ',
    'RunEmulatorAndOpenGame': 'Please run your emulator & Open the game',
    'CurrentlySupportedEmulators': '(Only DeSmuME, VBA & Citra supported currently)',
    'CheckForX64': 'Check your emulator is "x64" and not "x86" or ask in discord',
    'MultipleEmulatorsDetected': 'Multiple emulators detected',
    'NoEmulatorsFound': 'No emulators found, click to try again?',
    'EmulatorFound': 'Emulator Detected! (using {emulator})',
    'SelectADetectedEmulatorLong': 'Please select one of the emulators we found running:',
    'SelectADetectedEmulatorShort': 'Select an Emulator',
    'DoesNotSupportGeneration': '{emulator} (Doesn\'t support gen {generation})',
    'DetectionIsPaused': 'Emulator detection paused',
    'WaitingForGameData': 'Waiting for Game data...',
    'ConnectingToEmulator': 'Attempting to automatically connect to {emulator}',
    'LoadLuaScriptIntoEmulator': 'Load the Lua Script into your emulator',
    'Instructions': {
      'VBA-RR': 'This can be done by going to <em>Tools</em> » <em>Lua Script Window</em> » <em>New Lua Script Window</em> inside VBA-ReRecording <em>(Be sure not to close the script window, you can minimize it though)</em',
      'DeSmuME': 'This can be done by going to <em>Tools</em> » <em>Lua Scripting</em> » <em>New Lua Script Window</em> inside of <em>DeSmuME</strong> <em>(Be sure not to close the script window, you can minimize it though)</em>'
    }
  },

  'ConnectionDetails': {
    'ConnectionTypes': {
      'host': {
        'description': 'Vous avez ouvert un port sur votre routeur/modem ou vous disposez d\'un autre moyen de se connecter.',
        'title': 'Héberger un serveur'
      },
      'client': {
        'description': 'Quelqu\'un d\'autre a configuré son réseau et je vais me connecter à son application Pokélink.',
        'title': 'Se connecter à une autre personne'
      }
    }
  }
}
