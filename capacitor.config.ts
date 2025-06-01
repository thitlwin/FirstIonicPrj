import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId:  'io.ionic.starter',
  appName: 'photo-gallery',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      appId: 'ce383464',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
