import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

export default defineConfig(({ command, mode, ssrBuild }) => {
    const config = {
        plugins: [svelte()],
        base: '/introduction-lecture-2023-ganjil/',
        resolve: {
            alias: {
                '@config': path.resolve(__dirname, './src/config.ts'),
                '@components': path.resolve(__dirname, './src/lib/components/index.ts'),
                '@languages': path.resolve(__dirname, './src/lib/languages/index.ts'),
                '@lib': path.resolve(__dirname, './src/lib'),
                '@stores': path.resolve(__dirname, './src/lib/stores'),
                '@styles': path.resolve(__dirname, './src/lib/styles'),
                '@assets': path.resolve(__dirname, './src/lib/assets'),
            },
        },
    }
    if (command === 'build') {
        config.base = '/introduction-lecture-2023-ganjil/'
    }

    return config;
})