'use client';
import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'bn', 'sa', 'fr', 'in', 'pk', 'es', 'cn'],
        fallbackLng: 'en',
        debug: false,
        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/public-view/locales/{{lng}}/translation.json',
        },
    });

export default i18n;