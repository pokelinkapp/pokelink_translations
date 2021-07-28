export default {
  'Titles': {
    'Session': 'Session Settings',
    'System': 'System Settings',
    'Window': 'Window Settings',
    'ViewLogs': 'View Logs',
    'Connections': 'Connections',
    'Accessibility': 'Accessibility Settings',
    'GameAndEmulator': 'Game & Emulator Settings'
  },
  'Fields': {
    'SessionName': {
      'Title': 'Session Name',
      'Description': 'Change the name of this session'
    },
    'EmulatorLocation': {
      'Title': 'Emulator Location',
      'Description': 'Change the path of your emulator'
    },
    'RomLocation': {
      'Title': 'Rom Location',
      'Description': 'Change the path of this file'
    },
    'RevealEggs': {
      'Title': 'Reveal Eggs',
      'Description': 'Should an egg\'s contents be revealed in the party screen'
    },
    'SendToTray': {
      'Title': 'Send to system tray instead of closing the app',
      'Description': 'Instead of closing the app when the X button is clicked, send it to the system tray'
    },
    'AllowErrorReporting': {
      'Title': 'Allow Pokélink to automatically submit error reports',
      'Description': 'Turning this off stops the app sending anonymous data when bugs happen in the app'
    },
    'AutomaticallyBootEmulator': {
      'Title': 'Automatically launch emulator when resuming a session',
      'Description': 'Disable this if you\'d rather launch the emulator yourself'
    },
    'EnableDyslexiaFont': {
      'Title': 'Enable Dyslexia Font',
      'Description': 'Enable font (on the app only) that improves readability for people with dyslexia'
    },
    'EnableDarkMode': {
      'Title': 'Enable Dark Mode',
      'Description': 'Please the eyes with a darker color scheme'
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
      'Title': 'Customise Bot Commands',
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
        'evs': 'The command that will show the EVs of a specific Pokémon in your party',
        'ivs': 'The command that will show the IVs of a specific Pokémon in your party',
        'ability': 'The command that will show the ability of a specific Pokémon in your party',
        'nature': 'The command that will show the nature of a specific Pokémon in your party',
        'faster': 'The command that will show which Pokémon is faster between your Pokémon and a specified Pokémon species',
        'moves': 'The command that will show the current moves of a specific Pokémon in your party',
        'deaths': 'The command that will show the deaths that Pokélink has tracked for this session'
      }
    }
  }
}
