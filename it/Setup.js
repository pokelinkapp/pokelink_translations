export default {
  'step': 'Passo {step}',
  'Steps': {
    'SessionName': 'Nome Sessione',
    'GameSelection': 'Selezione Gioco',
    'SetupEmulator': 'Configurazione Emulatore',
    'ConnectionDetails': 'Dettagli Connessione'
  },
  'Welcome': {
    'username': 'Nome utente'
  },
  'Details': {
    'GameTypes': {
      'solo': {
        'description': 'Giocherai da solo senza alcun bisogno di connetterti ad altri giocatori',
        'title': 'Sessione Individuale'
      },
      'multi': {
        'description': 'Giocherai assieme a 1 o più giocatori',
        'title': 'Multigiocatore'
      },
      'multi_soullink': {
        'description': 'Giocherai in modalità Soul Link assieme a 1 o più giocatori',
        'title': 'Multigiocatore Soul Link'
      },
      'multi_vs': {
        'description': 'Giocherai in modalità VS assieme a 1 o più giocatori',
        'title': 'Multigiocatore VS'
      }
    }
  },
  'SessionDetails': {
    'SessionName': 'Nome Sessione',
    'Save': 'Continua con la configurazione della sessione',
    'Validation': {
      'SessionNameAndGameOptions': 'Devi inserire un nome sessione per poter continuare'
    }
  },

  'GameSelection': {
    'DetectionTypes': {
      'automatic': {
        'description': 'Se il tuo gioco è supportato, Pokélink leggerà i dati in tempo reale direttamente dall\'emulatore',
        'title': 'Gestione Squadra Automatica'
      },
      'manual': {
        'description': 'Puoi modificare la tua squadra usando una semplice interfaccia nell\'applicazione',
        'title': 'Gestione Squadra Manuale'
      }
    }
  },

  'Emulator': {
    'Subtitle': 'Verifica compleramento del processo',
    /* TODO:
       en: Verify if 'Tentativo di' should be kept. It it actually quite verbose and sligthly in informal Italian
       it: Verificare se mantenere 'Tentativo di'. È ripetitivo e non suona bene in italiano informale
    */
    'AttemptingToConnect': 'Tentativo di rilevamento dell\'emulatore... ',
    'RunEmulatorAndOpenGame': 'Apri l\'emulatore ed avvia il gioco',
    'CurrentlySupportedEmulators': '(Solo DeSmuME, VBA, Bizhawk & Citra sono attualmente supportati)',
    'CheckForX64': 'Verifica che il tuo emulatore sia "x64" e non "x86" altrimenti chiedi in Discord',
    'MultipleEmulatorsDetected': 'Rilevati multipli emulatori',
    'NoEmulatorsFound': 'Nessun emulatore rilevato, clicca per tentare di nuovo',
    'EmulatorFound': 'Rilevato Emulatore! ({emulator} è attivo)',
    'SelectADetectedEmulatorLong': 'Seleziona uno degli emulatori rilevati:',
    'SelectADetectedEmulatorShort': 'Seleziona un Emulatore',
    'DoesNotSupportGeneration': '{emulator} (Gen {generation} non supportata)',
    'DetectionIsPaused': 'Rilevamento Emulatore in pausa',
    'WaitingForGameData': 'In attesa di dati di Gioco...',
    'ConnectingToEmulator': 'Tentativo di connessione automatica a {emulator}',
    'LoadLuaScriptIntoEmulator': 'Carica lo Script Lua nel tuo emulatore',
    'Instructions': {
      /*
      TODO (techy):
      - Remove the styling ASAP (keeping it until en-GB removes it, which means that it is safe to do so here)
      - Verify that the text does not break other UI elements
      - Verify that the text "works" AKA clear and not too verbose
      */
      'VBA-RR': 'Apri la finestra Lua via: <em>Tools</em> » <em>Lua Script Window</em> » <em>New Lua Script Window</em> in <em>VBA-ReRecording</em>, copia il percorso nel campo di testo e premi <em>Run</em> <em>(La finestra deve rimanere aperta! Può essere minimizzata ma non chiusa)</em',
      'DeSmuME': 'Apri la finestra Lua via: <em>Tools</em> » <em>Lua Scripting</em> » <em>New Lua Script Window</em> in <em>DeSmuME</em>, copia il percorso nel campo di testo e premi <em>Run</em> <em>(La finestra deve rimanere aperta! Può essere minimizzata ma non chiusa)</em>',
      'Bizhawk': 'Pokélink automatically generated a lua script for your session. We closed Bizhawk, and launched it again with the lua script injected for you!'
    },
    'Errors': {
      'Bizhawk': {
        'EmulatorClosedUnexpectedly': {
          'Title': 'Bizhawk Close Detected',
          'Message': 'Pokelink detected that Bizhawk was unexpectedly closed. If you did not intend to close Bizhawk, please end this session, close Pokélink, re-open Pokélink and resume this session to continue.'
        },
        'RomRequired': {
          'Message': 'ROM needs to be dropped in the previous step to use Bizhwk'
        }
      }
    }
  },

  'ConnectionDetails': {
    'ConnectionTypes': {
      'host': {
        'description': 'Hai configurato il tuo router/modem o hai altri mezzi per permettere altri di connettersi.',
        'title': 'Ospita la sessione'
      },
      'client': {
        'description': 'Qualcun altro ha configurato la propria rete e mi connetterò al loro Pokélink.',
        'title': 'Connettiti ad un altro giocatore'
      }
    }
  }
}
