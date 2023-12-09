export default {
  'Titles': {
    'Session': 'Configuración de sesión',
    'System': 'Configuración de sistema',
    'Window': 'Configuración de ventana',
    'ViewLogs': 'Ver Registro',
    'Connections': 'Conexiones',
    'Accessibility': 'Configuración de Accesibilidad',
    'Shortcuts': 'Atajos Globales',
    'GameAndEmulator': 'Configuración de juego & emulador'
  },
  'Fields': {
    'SessionName': {
      'Title': 'Nombre de sesión',
      'Description': 'Cambia el nombre de esta sesión'
    },
    'EmulatorLocation': {
      'Title': 'Localización del Emulador',
      'Description': 'Cambia la ruta de tu emulador'
    },
    'RomLocation': {
      'Title': 'Localización de la ROM',
      'Description': 'Cambia la ruta de la ROM'
    },
    'RevealEggs': {
      'Title': 'Revelar huevos',
      'Description': 'Los contenidos del huevo serán revelados en el apartado Equipo'
    },
    'SendToTray': {
      'Title': 'Enviar a bandeja del sistema en lugar de cerrar la aplicación',
      'Description': 'En lugar de cerrar la aplicación, enviarla a la bandeja del sistema'
    },
    'AllowErrorReporting': {
      'Title': 'Permitir a Pokélink enviar automáticamente reportes de errores',
      'Description': 'Desactivar esto previene que la aplicación envíe datos anónimos cuando ocurre un bug'
    },
    'AutomaticallyBootEmulator': {
      'Title': 'Automáticamente lanzar el emulador cuando inicies una sesión',
      'Description': 'Desactiva esto si prefieres iniciar el emulador por tu cuenta'
    },
    'EnableDyslexiaFont': {
      'Title': 'Activar fuente para disléxicos',
      'Description': 'Activar la fuente (dentro de la aplicación) que mejora la lectura para gente con dislexia'
    },
    'EnableDarkMode': {
      'Title': 'Activar Modo Oscuro',
      'Description': 'Satisface la vista con una paleta de colores más oscura'
    },
    'Language': {
      'Title': 'Idioma',
      'Description': 'Cambia el idioma usado dentro de la aplicación Pokélink'
    },
    'TwitchBot': {
      'Title': 'Twitch Bot'
    },
    'TwitchBotLogin': {
      'Title': 'Twitch Bot Login',
      'Description': 'Conecta tu cuenta de Twitch para habilitar funciones integradas de Twitch'
    },
    'TwitchBotStatus': {
      'Title': 'Estado del bot de Twitch',
      'Description': 'Detiene & Inicia el bot de Twitch'
    },
    'TwitchBotCommands': {
      'Title': 'Personaliza los comandos del bot de Twitch',
      'Description': 'Cambia los comandos que el bot de Twitch va a utilizar'
    },
    'Shortcuts': {
      'Global': {
        'Badges': {
          'Title': 'Global shortcut for Badge {badge}',
          'Description': 'Shortcut to toggle badge {badge} on/off.'
        }
      }
    }
  },
  'Actions': {
    'Connections': {
      'TwitchAccount': {
        'Login': 'Inicia sesión con tu cuenta de Twitch',
        'Logout': 'Desconecta tu cuenta de Twitch',
        'LoggedInAs': 'Sesión iniciada como: {twitchName}'
      },
      'TwitchBotStatus': {
        'Start': 'Iniciar Bot',
        'Stop': 'Detener Bot'
      }
    }
  },
  'Connections': {
    'TwitchBot': {
      'Commands': {
        'listCommands': 'El comando utilizado para mostrar los comandos disponibles',
        'team': 'El comando que mostrará tu equipo',
        'stats': 'El comando que mostrará las estadísticas de un Pokémon específico en tu equipo',
        'evs': 'El comando que mostrará los EVs de un Pokémon específico en tu equipo',
        'ivs': 'El comando que mostrará los IVs de un Pokémon específico en tu equipo',
        'ability': 'El comando que mostrará la habilidad de un Pokémon específico en tu equipo',
        'nature': 'El comando que mostrará la naturaleza de un Pokémon específico en tu equipo',
        'faster': 'El comando que mostrará qué Pokémon es más rápido entre tus Pokémon y una especie de Pokémon especificada',
        'moves': 'El comando que mostrará los movimientos actuales de un Pokémon específico en tu equipo',
        'deaths': 'El comando que mostrará las muertes que Pokélink ha registrado para esta sesión'
      }
    }
  }
}
