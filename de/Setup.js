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
    'Subtitle': 'Prüfen ob der Vorgang abgeschlossen ist',
    'AttemptingToConnect': 'Versuch, den Emulator zu erkennen... ',
    'RunEmulatorAndOpenGame': 'Bitte starten Sie Ihren Emulator und öffnen Sie das Spiel',
    'CurrentlySupportedEmulators': '(Derzeit werden nur DeSmuME, VBA & Citra unterstützt)',
    'CheckForX64': 'Prüfen Sie, ob Ihr Emulator "x64" und nicht "x86" ist, oder fragen Sie in Discord',
    'MultipleEmulatorsDetected': 'Mehrere Emulatoren erkannt',
    'NoEmulatorsFound': 'Keine Emulatoren gefunden, klicken Sie, um es erneut zu versuchen',
    'EmulatorFound': 'Emulator erkannt! (Verwendet wird {emulator})',
    'SelectADetectedEmulatorLong': 'Bitte wählen Sie einen der Emulatoren aus, die grade laufen:',
    'SelectADetectedEmulatorShort': 'Wählen Sie einen Emulator aus',
    'DoesNotSupportGeneration': '{emulator} (Unterstützt nicht die Generation {generation})',
    'DetectionIsPaused': 'Emulator-Erkennung pausiert',
    'WaitingForGameData': 'Warten auf Spieldaten...',
    'ConnectingToEmulator': 'Versucht, automatisch eine Verbindung mit {emulator} herzustellen',
    'LoadLuaScriptIntoEmulator': 'Laden Sie das Lua-Skript in Ihren Emulator',
    'Instructions': {
      'VBA-RR': 'Dazu gehen Sie auf <em>Tools</em> » <em>Lua Script Window</em> » <em>New Lua Script Window</em> innerhalb von VBA-ReRecording <em>(Achten Sie darauf, das Skript-Fenster nicht zu schließen, Sie können es aber minimieren)</em>',
      'DeSmuME': 'Dies kann über <em>Tools</em> » <em>Lua Scripting</em> » <em>New Lua Script Window</em> innerhalb von <em>DeSmuME</strong> <em>(Achten Sie darauf, das Skript-Fenster nicht zu schließen, Sie können es aber minimieren)</em>'
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
