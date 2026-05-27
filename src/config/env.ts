import Constants from 'expo-constants';

type AppEnv = 'development' | 'staging' | 'production';

const extra = Constants.expoConfig?.extra ?? {};

const appEnv = (extra.appEnv ?? 'development') as AppEnv;

const envConfig = {
    apiUrl: extra.apiUrl ?? '',
    appEnv,
    isDev: appEnv === 'development',
    isStaging: appEnv === 'staging',
    isProd: appEnv === 'production',
};

export default envConfig;