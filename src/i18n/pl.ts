export const pl = {
  menu: {
    logoLabel: "Gra się zaczyna. Przetrwasz do końca?",
    playCTA: "Graj",
    rulesCTA: "Zasady",
    settingsCTA: "Ustawienia",
  },
  setup: {
    title: "🎮 Ustawienia gry",
    paragraphs: [
      "Zanim zaczniesz, dostosuj grę do swojej grupy.",
      "Możesz ustawić limit kart, czas trwania gry lub grać bez ograniczeń.",
      "Jeśli tryb wielojęzyczny jest włączony — każdy gracz zobaczy zadanie na karcie w wybranym języku.",
      "Gotowi? Niech zacznie się szaleństwo!"
    ],
    play: "Graj",
    setupScreen: "Ekran konfiguracji może być wyłączony w ustawieniach",
  },
  pwa: {
    label:
      "Aby grało się wygodniej, dodaj tę grę do ekranu głównego. Będzie otwierać się szybciej, działać offline i wyglądać jak prawdziwa aplikacja.",
    skip: "Pomiń",
    iOS: {
      NotSafari: [
        "Kliknij tutaj, aby skopiować link",
        "Otwórz Safari",
        "Wklej skopiowany link w pasek adresu",
      ],
      Safari: [
        "Kliknij ikonę Udostępnij",
        "Wybierz Dodaj do ekranu początkowego",
        "Na końcu kliknij Dodaj",
      ],
    },
    Android: {
      Supported: [
        "Kliknij trzy kropki",
        "Wybierz Dodaj do ekranu głównego",
        "Kliknij Dodaj, aby potwierdzić",
      ],
      notSupported: [
        "Kliknij tutaj, aby skopiować link",
        "Otwórz Chrome",
        "Wklej skopiowany link w pasek adresu",
      ],
    },
  },
  rules: {
    mainTitle: '🎴Zasady gry',
    goal: {
      title: "🌬️ Cel:",
      paragraphs: [
        "Dobieraj karty, wykonuj instrukcje i spróbuj przetrwać do końca (jeśli taki istnieje).",
      ],
    },
    howToPlay: {
      title: "🔷 Jak grać:",
      paragraphs: [
        "W swojej turze dobierz jedną kartę z talii.",
        "Wykonaj działanie zapisane na karcie.",
        "Następnie odrzuć kartę — twoja tura się kończy.",
        "Następny gracz dobiera kartę i gra toczy się dalej.",
      ],
    },
    gameModes: {
      title: "🔄 Tryby gry:",
      paragraphs: [
        "Talia bez końca — karty mogą się powtarzać w nieskończoność.",
        "Talia 36 kart — klasyczna krótka talia (od 6 do Asa).",
        "Talia 52 karty — pełna standardowa talia.",
      ],
    },
    gameDuration: {
      title: "⏰ Czas gry:",
      paragraphs: [
        "Bez limitu — graj ile chcesz.",
        "Własny limit czasu — ustaw czas trwania przed rozpoczęciem gry.",
      ],
    },
    footer: {
      lines: ["Niech rozpocznie się chaos.", "Czy dotrwasz do końca?"],
    },
  },
  settings: {
    cardLimit: "Limit kart",
    cardLimitTooltip:
      "Ustaw limit kart w grze. Gra kończy się po jego osiągnięciu.",
    limitTime: "Limit czasu (min)",
    limitTimeTooltip:
      "Ustaw limit czasu gry. Gdy czas się skończy, gra się zakończy.",
    music: "Muzyka",
    musicTooltip: "Włącz lub wyłącz muzykę w tle.",
    sounds: "Dźwięki",
    soundsTooltip: "Włącz lub wyłącz efekty dźwiękowe.",
    background: "Motyw",
    backgroundTooltip: "Ustaw motyw gry.",
    backgroundSonner: {
      sonnerText: 'Odśwież stronę, aby zobaczyć wszystkie zmiany!',
      buttonLabel: 'Odśwież',
    },
    multiLanguage: "Wiele języczność",
    multiLanguageTooltip: "Pozwala graczom zmieniać język zasad w trakcie gry.",
    gameSetUp: "Konfiguracja gry",
    gameSetUpTooltip:
      "Pokaż ekran konfiguracji gry przed rozpoczęciem nowej gry",
    language: "Język",
    languageTooltip: "Wybierz język interfejsu gry.",
    yesOption: "Tak",
    noOption: "Nie",
  },
  game: {
    showCard: "Pokaż kartę",
    cardAction: {
      c2: "Zadaj dowolne pytanie innemu graczowi. Jeśli nie odpowie — pije. Jeśli nie chcesz pytać — pijesz sam.",
      c3: "Wybierz kategorię (np. marki samochodów). Każdy po kolei podaje przykład. Kto się zatnie — pije.",
      c4: "W dowolnym momencie możesz położyć kciuk na stole. Inni muszą to powtórzyć. Kto zrobi to ostatni — pije.",
      c5: "Wszyscy kładą rękę na głowie. Kto zrobi to ostatni — pije.",
      c6: "Opuszczasz swoją kolejkę.",
      c7: "Po kolei mówicie liczby. Nie wolno mówić liczb podzielnych przez 7 ani zawierających cyfrę 7. Pomyłka — pijesz.",
      c8: "Cała grupa wymyśla frazę, którą musisz powiedzieć przed lub po wypiciu. Zapomniałeś — pijesz ponownie.",
      c9: "Cała grupa wymyśla czynność, którą musisz wykonać przed lub po wypiciu. Zapomniałeś — pijesz ponownie.",
      c10: "Do końca rundy nie możesz odpowiadać na pytania innych graczy.",
      c11: "Pijesz ty i gracz po twojej prawej stronie.",
      c12: "Wszyscy kładą rękę na stół. Ty decydujesz, kiedy można ją zabrać. Kto zrobi to ostatni — pije.",
      c13: "Wybierasz, kto pije. Możesz wskazać kogokolwiek, nawet kilka razy pod rząd tę samą osobę.",
      c14: "Wszyscy przy stole piją!",
    },
    cardLeft: "kart zostało",
    gameEnd: "Koniec gry, gramy jeszcze raz?",
    CtaPlayAgain: 'Graj',
    CtaFinishGame: 'Główne menu',
    EndGameModalTitle: '🎉 Koniec gry',
    EndGameModalDescrition: 'Runda dobiegła końca! Możesz rozpocząć nową grę lub wrócić do menu głównego.',
    CtaUnpause: "Kontynuuj grę",
    PauseGameModalTitle: "⏸️ Chcesz przerwać grę?",
    PauseGameModalDescrition: "Jeśli teraz wrócisz, bieżąca rozgrywka zakończy się. Możesz kontynuować grę lub wrócić do menu głównego."
  },
};
