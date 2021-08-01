export default {
  'step': 'Stap {step}',
  'Steps': {
    'SessionName': 'Sessienaam',
    'GameSelection': 'Spel selectie',
    'SetupEmulator': 'Emulator instellen',
    'ConnectionDetails': 'Verbindingsdetails'
  },
  'Welcome': {
    'username': 'Gebruikersnaam'
  },
  'Details': {
    'GameTypes': {
      'solo': {
        'description': 'U speelt alleen met niemand waarmee u moet verbinden',
        'title': 'Individueel spel'
      },
      'multi': {
        'description': 'U speelt een spel door met 1 of meerdere spelers',
        'title': 'Multiplayer'
      },
      'multi_soullink': {
        'description': 'U speelt een soul link spel met 1 of meerdere spelers',
        'title': 'Soul Link Multiplayer'
      },
      'multi_vs': {
        'description': 'U speelt tegen 1 of meerdere spelers',
        'title': 'VS Multiplayer'
      }
    }
  },
  'SessionDetails': {
    'SessionName': 'Sessienaam',
    'Save': 'Doorgaan met het instellen van de sessie',
    'Validation': {
      'SessionNameAndGameOptions': 'U moet een sessienaam ingeven voordat u kan doorgaan'
    }
  },

  'GameSelection': {
    'DetectionTypes': {
      'automatic': {
        'description': 'Als het spel ondersteund wordt, gaat Pokélink de informatie live van uw emulator lezen',
        'title': 'Automatisch teammanagement'
      },
      'manual': {
        'description': 'U kunt manueel uw team aanpassen door het gebruik van een simpele interface in de app',
        'title': 'Manueel teammanagement'
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
        'description': 'U heeft een poort geopend op uw router/modem of heeft een andere manier om hun te laten verbinden.',
        'title': 'Een server hosten'
      },
      'client': {
        'description': 'Iemand anders heeft hun netwerk ingesteld en ik wil met hun Pokélink app verbinden.',
        'title': 'Verbind met een ander persoon'
      }
    }
  }
}
