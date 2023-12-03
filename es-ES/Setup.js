export default {
  'step': 'Step {step}',
  'Steps': {
    'SessionName': 'Session Name',
    'GameSelection': 'Game Selection',
    'SetupEmulator': 'Setup Emulator',
    'ConnectionDetails': 'Connection Details'
  },
  'Welcome': {
    'username': 'Username'
  },
  'Details': {
    'GameTypes': {
      'solo': {
        'description': 'You are playing on your own with no need to connect to others',
        'title': 'Individual Run'
      },
      'multi': {
        'description': 'You are playing a run with 1 or more other people',
        'title': 'Multiplayer'
      },
      'multi_soullink': {
        'description': 'You are playing a soul link run with 1 or more other people',
        'title': 'Soul Link Multiplayer'
      },
      'multi_vs': {
        'description': 'You are playing a VS run with 1 or more other people',
        'title': 'VS Multiplayer'
      }
    }
  },
  'SessionDetails': {
    'SessionName': 'Session Name',
    'Save': 'Continue with session setup',
    'Validation': {
      'SessionNameAndGameOptions': 'You must enter a session name before you can continue'
    }
  },

  'GameSelection': {
    'DetectionTypes': {
      'automatic': {
        'description': 'If your game is supported, Pokélink will read the data live from your emulator',
        'title': 'Automatic Party Management'
      },
      'manual': {
        'description': 'You can manually edit your team using a simple interface within the app',
        'title': 'Manual Party Management'
      }
    }
  },

  'Emulator': {
    'Subtitle': 'Now let\'s check the process is complete',
    'AttemptingToConnect': 'Attempting to detect emulator... ',
    'RunEmulatorAndOpenGame': 'Please run your emulator & Open the game',
    'CurrentlySupportedEmulators': '(Only DeSmuME, VBA, Bizhawk & Citra supported currently)',
    'CheckForX64': 'Check your emulator is "x64" and not "x86" or ask in Discord',
    'MultipleEmulatorsDetected': 'Multiple emulators detected',
    'NoEmulatorsFound': 'No emulators found, click to try again?',
    'EmulatorFound': 'Emulator Detected! (using {emulator})',
    'SelectADetectedEmulatorLong': 'Please select one of the emulators we found running:',
    'SelectADetectedEmulatorShort': 'Select an Emulator',
    'DoesNotSupportGeneration': '{emulator} (Doesn\'t support Gen {generation})',
    'DetectionIsPaused': 'Emulator detection paused',
    'WaitingForGameData': 'Waiting for Game data...',
    'ConnectingToEmulator': 'Attempting to automatically connect to {emulator}',
    'LoadLuaScriptIntoEmulator': 'Load the Lua Script into your emulator',
    'Instructions': {
      'VBA-RR': 'This can be done by going to <em>Tools</em> » <em>Lua Script Window</em> » <em>New Lua Script Window</em> inside <em>VBA-ReRecording</em> <em>(Be sure not to close the script window, you can minimize it though)</em',
      'DeSmuME': 'This can be done by going to <em>Tools</em> » <em>Lua Scripting</em> » <em>New Lua Script Window</em> inside of <em>DeSmuME</em> <em>(Be sure not to close the script window, you can minimize it though)</em>',
      'Bizhawk': 'Pokélink automatically generated a lua script for your session. We closed Bizhawk, and launched it again with the lua script injected for you!'
    },
    'Errors': {
      'Bizhawk': {
        'EmulatorClosedUnexpectedly': {
          'Title': 'Bizhawk Close Detected',
          'Message': 'Pokelink detected that Bizhawk was unexpectedly closed. If you did not intend to close Bizhawk, please end this session, close Pokélink, re-open Pokélink and resume this session to continue.'
        },
        'RomRequired': {
          'Message': 'ROM needs to be dropped in the previous step to use Bizhawk'
        },
        'BadBizhawkVersion': {
          'Message': 'Bizhawk version must be {version}'
        }
      }
    }
  },

  'ConnectionDetails': {
    'ConnectionTypes': {
      'host': {
        'description': 'You\'ve opened up a port on your router/modem or have another way for them to connect.',
        'title': 'Host a server'
      },
      'client': {
        'description': 'Somebody else has configured their network, and I will connect to their Pokélink app.',
        'title': 'Connect to another person'
      }
    }
  }
}
