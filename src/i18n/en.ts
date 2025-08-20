export const en = {
  menu: {
    logoLabel: "The game begins. Will you endure?",
    playCTA: "Play",
    rulesCTA: "Rules",
    settingsCTA: "Settings",
  },
  setup: {
    title: "🎮 Game Setup",
    paragraphs: [
      "Before you start, customize the game to match your group.",
      "You can choose a card limit, set a time duration, or play without any limits.",
      "If multi-language mode is enabled, each player will see the task on the card in their selected language.",
      "Ready to start? Let the madness begin!"
    ],
    play: "Play",
    setupScreen: "Game setup screen can be disabled in settings",
  },
  pwa: {
    label:
      "For the best experience, add this game to your home screen. It will open faster, work offline, and feel like a real app.",
    skip: 'Skip',
    iOS: {
      NotSafari: [
        "Tap here to copy the link",
        "Open Safari",
        "Paste the copied link into the address bar",
      ],
      Safari: [
        "Tap the Share icon",
        "Select Add to Home Screen",
        "Finally, press Add<",
      ],
    },
    Android: {
      Supported: [
        "Tap the three dots",
        "Select Add to Home Screen",
        "Tap Add to confirm",
      ],
      notSupported: [
        "Tap here to copy the link",
        "Open Chrome",
        "Paste the copied link into the address bar",
      ],
    },
  },
  rules: {
    mainTitle: '🎴Game Rules',
    goal: {
      title: "🌬️ Goal:",
      paragraphs: [
        "Draw cards, follow the instructions, and try to survive till the end (if there is one)."
      ]
    },
    howToPlay: {
      title: "🔷 How to Play:",
      paragraphs: [
        "On your turn, draw one card from the deck.",
        "Perform the action written on the card.",
        "After that, discard the card — your turn is over.",
        "The next player draws a card and the game continues."
      ]
    },
    gameModes: {
      title: "🔄 Game Modes:",
      paragraphs: [
        "Endless Deck — cards can repeat infinitely.",
        "36-Card Deck — classic short deck (6 to Ace).",
        "52-Card Deck — full standard deck."
      ]
    },
    gameDuration: {
      title: "⏰ Game Duration:",
      paragraphs: [
        "Endless — play as long as you want.",
        "Custom Time Limit — set the duration before the game begins."
      ]
    },
    footer: {
      lines: [
        "Let the chaos begin.",
        "Will you make it to the end?"
      ]
    }
  },
  settings: {
    cardLimit: "Card limit",
    cardLimitTooltip:
      "Set the number of cards in the game. The game ends when the limit is reached.",
    limitTime: "Time limit (min)",
    limitTimeTooltip: "Set a game timer. When time runs out, the game ends.",
    music: "Music",
    musicTooltip: "Toggle background music on or off.",
    sounds: "Sounds",
    soundsTooltip: "Toggle sound effects on or off.",
    background: "theme",
    backgroundTooltip: "Choose a theme for the game.",
    backgroundSonner: {
      sonnerText: 'Refresh the page to see all changes!',
      buttonLabel: 'Refresh',
    },
    multiLanguage: "Multi language",
    multiLanguageTooltip:
      "Allows players to switch rules language during the game.",
    gameSetUp: "Game set up",
    gameSetUpTooltip: "Show game setup screen before starting new game",
    language: "Language",
    languageTooltip: "Choose the interface language.",
    yesOption: "Yes",
    noOption: "No",
  },
  game: {
    showCard: "Show card",
    cardAction: {
      c2: "Ask any other player a question. If they refuse to answer — they drink. If you don’t want to ask — you drink.",
      c3: "Choose a category (e.g., car brands). Everyone must name an item in turn. Fail to answer — you drink.",
      c4: "At any moment you may place your thumb on the table. Others must copy you. The last one to do so drinks.",
      c5: "Everyone puts a hand on their head. The last one to do so drinks.",
      c6: "Skip your turn.",
      c7: "Go around the table counting upwards. You cannot say numbers divisible by 7 or containing digit 7. Make a mistake — you drink.",
      c8: "The group agrees on a phrase you must say before or after drinking. Forget it — drink again.",
      c9: "The group agrees on an action you must perform before or after drinking. Forget it — drink again.",
      c10: "For the rest of this round you may not answer any questions from other players.",
      c11: "You drink, and so does the player to your right.",
      c12: "Everyone puts a hand on the table. You decide when they may remove it. The last to remove drinks.",
      c13: "You choose who drinks. You may pick anyone, even the same person multiple times in a row.",
      c14: "Everyone at the table drinks!",
    },
    cardLeft: "card left",
    gameEnd: "Game finished, would you like to play again?",
    CtaPlayAgain: 'Play',
    CtaFinishGame: 'Main menu',
    EndGameModalTitle: '🎉 Game Over',
    EndGameModalDescrition: 'The round has ended! You can start a new game or return to the main menu.',
    CtaUnpause: "Continue playing",
    PauseGameModalTitle: "⏸️ Do you want to pause the game?",
    PauseGameModalDescrition: "If you go back now, the current game will end. You can either continue playing or return to the main menu."
  },
};
