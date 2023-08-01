import { resolve } from "path"
import { env } from "./env"
import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // devtools: { enabled: true },
    ssr: true,
    pages: true,
    components: true,
    css: ['vuetify/styles', '~/assets/styles/layout.scss'],
    vite: {
        ssr: {
            noExternal: ['vuetify'], // add the vuetify vite plugin
        },
    },
    modules: [
        '@nuxt/content',
    ],
    build: {
        transpile: [
            'vuetify',
            'flickity'
        ]
    },
    nitro: {
        prerender: {
            routes: [
            ]
        },
    },

    routeRules: {
    },
    app: {
        head: {
            titleTemplate: '%s - Defish Games',
            title: 'Defish Games',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Defish Games is a game development company based in UA. We are a team of developers who are passionate about creating games that are fun and easy to play in a Web3 space. By combining creativity, beloved work and professionalism, Defish develops and expands the scope of the GameFi sector.',
                },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'msapplication-TileColor', content: '#da532c' },
                { name: 'theme-color', content: '#ffffff' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                {
                    rel: 'apple-touch-icon',
                    sizes: '57x57',
                    href: '/apple-icon-57x57.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '60x60',
                    href: '/apple-icon-60x60.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '72x72',
                    href: '/apple-icon-72x72.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '76x76',
                    href: '/apple-icon-76x76.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '114x114',
                    href: '/apple-icon-114x114.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '120x120',
                    href: '/apple-icon-120x120.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '144x144',
                    href: '/apple-icon-144x144.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '152x152',
                    href: '/apple-icon-152x152.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/apple-icon-180x180.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '192x192',
                    href: '/android-icon-192x192.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '96x96',
                    href: '/favicon-96x96.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon-16x16.png',
                },
                { rel: 'manifest', href: '/manifest.json' },
            ],
        },
    },

    alias: {
        'assets': resolve(__dirname, 'assets'),
    },

    runtimeConfig: {
        public: {
            siteUrl: env.BASE_URL,
        }
    },
  }
)
