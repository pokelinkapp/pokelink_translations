export default {
  'step': 'Step {step}',
  'Steps': {
    'SessionName': 'Nome da Sessão',
    'GameSelection': 'Seleção de Jogo',
    'SetupEmulator': 'Configurar Emulador',
    'ConnectionDetails': 'Detalhes da Conexão'
  },
  'Welcome': {
    'username': 'Nome de Usuário'
  },
  'Details': {
    'GameTypes': {
      'solo': {
        'description': 'Você está jogando sozinho e não precisa se conectar com outras pessoas',
        'title': 'Run individual'
      },
      'multi': {
        'description': 'Você está jogando com 1 pessoa ou mais',
        'title': 'Multiplayer'
      },
      'multi_soullink': {
        'description': 'Você está jogando soul link com 1 pessoa ou mais',
        'title': 'Soul Link Multiplayer'
      },
      'multi_vs': {
        'description': 'Você está jogando VS com 1 pessoa ou mais',
        'title': 'VS Multiplayer'
      }
    }
  },
  'SessionDetails': {
    'SessionName': 'Nome da Sessão',
    'Save': 'Continuar com configuração da sessão',
    'Validation': {
      'SessionNameAndGameOptions': 'Você deve dar um nome para a sessão antes de continuar'
    }
  },

  'GameSelection': {
    'DetectionTypes': {
      'automatic': {
        'description': 'Se seu jogo for compatível, o Pokélink irá ler os dados direto do seu emulador em tempo real',
        'title': 'Gerenciamento automático de Time'
      },
      'manual': {
        'description': 'Você pode editar seu time manualmente usando uma interface simples dentro do app',
        'title': 'Gerenciamento manual de Time'
      }
    }
  },

  'Emulator': {
    'Subtitle': 'Agora vamos verificar se o processo foi concluído',
    'AttemptingToConnect': 'Tentando detectar o emulador... ',
    'RunEmulatorAndOpenGame': 'Por favor, abra o emulador e inicie o jogo',
    'CurrentlySupportedEmulators': '(Apenas DeSmuME, VBA, Bizhawk e Citra são compatíveis no momento)',
    'CheckForX64': 'Verifique se seu emulador é "x64" e não "x86" ou pergunte no nosso Discord',
    'MultipleEmulatorsDetected': 'Múltiplos emuladores detectados',
    'NoEmulatorsFound': 'Nenhum emulador encontrado, Tentar de novo?',
    'EmulatorFound': 'Emulador Detectado! (usando {emulator})',
    'SelectADetectedEmulatorLong': 'Por Favor selecione um dos emuladores que encontramos:',
    'SelectADetectedEmulatorShort': 'Selecione um Emulador',
    'DoesNotSupportGeneration': '{emulator} (Não é compatível com a Geração {generation})',
    'DetectionIsPaused': 'Detecção de emulador pausada',
    'WaitingForGameData': 'Esperando por dados do Jogo...',
    'ConnectingToEmulator': 'Tentando conectar automaticamente ao emulador {emulator}',
    'LoadLuaScriptIntoEmulator': 'Insira o Script Lua no seu emulador',
    'Instructions': {
      'VBA-RR': 'Para fazer isso vá em <em>Tools</em> » <em>Lua Script Window</em> » <em>New Lua Script Window</em> dentro de <em>VBA-ReRecording</em> <em>(Certifique-se de não fechar a janela do script, você pode apenas minimizá-la)</em',
      'DeSmuME': 'Para fazer isso vá em <em>Tools</em> » <em>Lua Scripting</em> » <em>New Lua Script Window</em> inside of <em>DeSmuME</em> <em>(Certifique-se de não fechar a janela do script, você pode apenas minimizá-la)</em>',
      'Bizhawk': 'O Pokélink gerou automaticamente um script Lua para a sua sessão. Nós fechamos o Bizhawk, e iniciamos de novo com o script Lua já injetado para você!'
    },
    'Errors': {
      'Bizhawk': {
        'EmulatorClosedUnexpectedly': {
          'Title': 'Fechamento do Bizhawk Detectado',
          'Message': 'Pokelink detectou que o Bizhawk foi fechado inesperadamente. Se não foi sua intenção fechar o Bizhawk, por favor finalize esta sessão, feche o Pokélink, abra novamente o Pokélink e retome esta sessão para continuar.'
        },
        'RomRequired': {
          'Message': 'Uma ROM precisa ser carregada no passo anterior para usar o Bizhawk'
        },
        'BadBizhawkVersion': {
          'Message': 'O Bizhawk precisa estar na versão {version}'
        }
      }
    }
  },

  'ConnectionDetails': {
    'ConnectionTypes': {
      'host': {
        'description': 'Você abriu uma porta no seu roteador/modem ou possui outra maneira para se conectarem.',
        'title': 'Hostear um servidor'
      },
      'client': {
        'description': 'Outra pessoa configurou sua rede, e eu vou conectar com seu app Pokélink.',
        'title': 'Connectar com outra pessoa'
      }
    }
  }
}
