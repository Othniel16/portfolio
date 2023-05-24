export default defineNuxtConfig({
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],

    css: [
        "@/assets/global.css",
    ]
})
