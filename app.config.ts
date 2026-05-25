import type { ConfigContext, ExpoConfig } from 'expo/config';
import * as dotenv from 'dotenv';
import * as path from 'path';

// APP_ENV based on eas profile or manual flag
const APP_ENV = process.env.APP_ENV ?? 'development';

// load correct .env file
dotenv.config({
    path: path.resolve(__dirname, `.env.${APP_ENV}`),
});

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