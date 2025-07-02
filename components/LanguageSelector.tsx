import React from 'react';
import { View, Button } from 'react-native';
import { useLanguage } from '@/context/LanguageContext';
import i18n from '@/i18n';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  return (
    <View style={{ flexDirection: 'row', gap: 8, marginBottom: 8 }}>
      <Button
        title={i18n.t('language.fr')}
        onPress={() => setLanguage('fr')}
        color={language === 'fr' ? '#888' : undefined}
      />
      <Button
        title={i18n.t('language.en')}
        onPress={() => setLanguage('en')}
        color={language === 'en' ? '#888' : undefined}
      />
    </View>
  );
}
