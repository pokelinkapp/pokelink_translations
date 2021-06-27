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
