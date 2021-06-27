export default {
  'step': 'Step {step}',
  'Steps': {
    'SessionName': 'Spill Navn',
    'GameSelection': 'Spill Velger',
    'SetupEmulator': 'Sett Opp Emulator',
    'ConnectionDetails': 'Tilkoblings Detaljer'
  },
  'Welcome': {
    'username': 'Brukernavn'
  },
  'Details': {
    'GameTypes': {
      'solo': {
        'description': 'Du spiller alene og trenger ikke å koble til andre',
        'title': 'Individuell Spilling'
      },
      'multi': {
        'description': 'Du spiller med 1 eller flere andre spillere',
        'title': 'Flerspillere'
      },
      'multi_soullink': {
        'description': 'Du spiller en Soul Link med 1 eller flere spillere',
        'title': 'Soul Link Flerspillere'
      },
      'multi_vs': {
        'description': 'Du spiller et VS spill med 1 eller flere spillere',
        'title': 'VS Flerspillere'
      }
    }
  },
  'SessionDetails': {
    'SessionName': 'Spill Navn',
    'Save': 'Fortsett med samme spill oppsett',
    'Validation': {
      'SessionNameAndGameOptions': 'Du må sette opp et spill navn før du kan fortsette'
    }
  },

  'GameSelection': {
    'DetectionTypes': {
      'automatic': {
        'description': 'Dersom PokéLink støtter valgt spill så blir dataen lest direkte fra emulatoren din',
        'title': 'Automatisk Lag Kontroll'
      },
      'manual': {
        'description': 'Du kan manuelt endre laget ditt ved hjelp av applikasjonens enkle interaktive system',
        'title': 'Manuel Lag Kontroll'
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
        'description': 'Du har åpnet en kanal på din ruter/modem eller koblet til dem på en annen måte.',
        'title': 'Start en server'
      },
      'client': {
        'description': 'Noen andre har konfigurert nettverket sitt, og jeg kobler meg til deres Pokélink app.',
        'title': 'Koble til en annen spiller'
      }
    }
  }
}
