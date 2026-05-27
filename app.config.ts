import type { ConfigContext, ExpoConfig } from 'expo/config';

const APP_ENV = process.env.APP_ENV ?? 'development';

console.log('APP_ENV:', APP_ENV);
console.log('EXPO_PUBLIC_APP_ENV:', process.env.EXPO_PUBLIC_APP_ENV);

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: process.env.EXPO_PUBLIC_APP_NAME ?? 'MyApp',
    slug: 'my-app',
    version: '1.0.0',
    extra: {
        appEnv: process.env.EXPO_PUBLIC_APP_ENV,
        apiUrl: process.env.EXPO_PUBLIC_API_URL,
        eas: {
            projectId: 'your-eas-project-id',
        },
    },
});