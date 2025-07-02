import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import LanguageSelector from '@/components/LanguageSelector';
import i18n from '@/i18n';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const shortcut = Platform.select({
    ios: 'cmd + d',
    android: 'cmd + m',
    web: 'F12',
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <LanguageSelector />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{i18n.t('home.welcome')}</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{i18n.t('home.step1Title')}</ThemedText>
        <ThemedText>
          {i18n.t('home.step1Description')} <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>.{' '}
          {i18n.t('home.openDevtools', { shortcut })}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{i18n.t('home.step2Title')}</ThemedText>
        <ThemedText>{i18n.t('home.step2Description')}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{i18n.t('home.step3Title')}</ThemedText>
        <ThemedText>{i18n.t('home.step3Description')}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
