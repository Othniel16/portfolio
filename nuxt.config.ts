export default defineNuxtConfig({
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],

    css: [
        "@/assets/global.css",
    ],

    plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
})
