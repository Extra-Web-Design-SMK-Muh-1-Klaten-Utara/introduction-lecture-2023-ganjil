import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
    if (command === 'serve') {
        return {
            plugins: [svelte()],
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
    }

    return {
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
})