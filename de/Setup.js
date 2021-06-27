export default {
  'step': 'Step {step}',
  'Steps': {
    'SessionName': 'Session-Name',
    'GameSelection': 'Spielauswahl',
    'SetupEmulator': 'Emulator Konfiguration',
    'ConnectionDetails': 'Verbindungsdetails'
  },
  'Welcome': {
    'username': 'Nutzername'
  },
  'Details': {
    'GameTypes': {
      'solo': {
        'description': 'Du spielst alleine ohne dich mit anderen Personen verbinden zu müssen',
        'title': 'Einzelspieler'
      },
      'multi': {
        'description': 'Du spielst mit einer oder mehreren Personen',
        'title': 'Mehrspieler'
      },
      'multi_soullink': {
        'description': 'Du spielst Soul Link mit einer oder mehreren Personen',
        'title': 'Soul Link Mehrspieler'
      },
      'multi_vs': {
        'description': 'Du spielst gegen eine oder mehrere Personen',
        'title': 'VS Mehrspieler'
      }
    }
  },
  'SessionDetails': {
    'SessionName': 'Session-Name',
    'Save': 'Die Konfiguration der Session fortsetzen',
    'Validation': {
      'SessionNameAndGameOptions': 'Du musst einen Session-Namen eingeben um fortzufahren'
    }
  },

  'GameSelection': {
    'DetectionTypes': {
      'automatic': {
        'description': 'Falls dein Spiel unterstützt wird, wird Pokélink die Daten live von deinem Emulator auslesen',
        'title': 'Automatisches Team-Management'
      },
      'manual': {
        'description': 'Du kannst dein Team manuell über ein simples Interface innerhalb der App bearbeiten',
        'title': 'Manuelles Team-Management'
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
        'description': 'Du hast einen Port in deinem Router/Modem eröffnet oder hast eine andere Möglichkeit zur Verbindung eingerichtet.',
        'title': 'Einen Server hosten'
      },
      'client': {
        'description': 'Jemand anderes hat sein/ihr Netzwerk konfiguriert und ich werde mich zu deren Pokélink App verbinden.',
        'title': 'Mit dem Server einer anderen Person verbinden'
      }
    }
  }
}
