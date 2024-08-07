import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@app': path.resolve(__dirname, './src/app'),
            '@views': path.resolve(__dirname, './src/app/views'),
            '@components': path.resolve(__dirname, './src/app/components'),
            '@static': path.resolve(__dirname, './src/app/static'),
            '@images': path.resolve(__dirname, './src/app/static/images'),
        },
    },
});
