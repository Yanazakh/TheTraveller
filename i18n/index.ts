import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';

export const translations = {
  en: {
    home: {
      welcome: 'Welcome!',
      step1Title: 'Step 1: Try it',
      step1Description: 'Edit app/(tabs)/index.tsx to see changes.',
      openDevtools: 'Press {shortcut} to open developer tools.',
      step2Title: 'Step 2: Explore',
      step2Description: "Tap the Explore tab to learn more about what's included in this starter app.",
      step3Title: 'Step 3: Get a fresh start',
      step3Description: 'When you\'re ready, run npm run reset-project to get a fresh app directory.',
    },
    explore: {
      title: 'Explore',
      description: 'This app includes example code to help you get started.',
      learnMore: 'Learn more',
    },
    language: {
      fr: 'Français',
      en: 'English',
    },
  },
  fr: {
    home: {
      welcome: 'Bienvenue\u00A0!',
      step1Title: '\u00C9tape\u00A01\u00A0: Essayez',
      step1Description: 'Modifiez app/(tabs)/index.tsx pour voir les changements.',
      openDevtools: 'Appuyez sur {shortcut} pour ouvrir les outils d\u00E9veloppeur.',
      step2Title: '\u00C9tape\u00A02\u00A0: Explorer',
      step2Description: "Touchez l'onglet Explorer pour en savoir plus sur le contenu de cette application de d\u00E9part.",
      step3Title: '\u00C9tape\u00A03\u00A0: Repartir de z\u00E9ro',
      step3Description: "Quand vous \u00EAtes pr\u00EAt, ex\u00E9cutez npm run reset-project pour obtenir un nouveau dossier app.",
    },
    explore: {
      title: 'Explorer',
      description: "Cette appli inclut du code d'exemple pour vous aider \u00E0 d\u00E9marrer.",
      learnMore: 'En savoir plus',
    },
    language: {
      fr: 'Français',
      en: 'Anglais',
    },
  },
};

const i18n = new I18n(translations);

i18n.enableFallback = true;
i18n.locale = Localization.locale;

export type Language = keyof typeof translations;

export default i18n;
