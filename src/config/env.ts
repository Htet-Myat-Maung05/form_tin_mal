type AppEnv = 'development' | 'staging' | 'production';

interface EnvConfig {
    apiUrl: string;
    appEnv: AppEnv;
    appName: string;
    isDev: boolean;
    isStaging: boolean;
    isProd: boolean;
}

const appEnv = (process.env.EXPO_PUBLIC_APP_ENV ?? 'development') as AppEnv;

const envConfig: EnvConfig = {
    apiUrl: process.env.EXPO_PUBLIC_API_URL ?? 'https://dev-api.example.com',
    appEnv,
    appName: process.env.EXPO_PUBLIC_APP_NAME ?? 'MyApp',
    isDev: appEnv === 'development',
    isStaging: appEnv === 'staging',
    isProd: appEnv === 'production',
};

export default envConfig;