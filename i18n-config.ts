export const i18n = {
  locales: ['bg', 'en'],
  defaultLocale: 'bg',
  localeDetection: true,
} as const;

export type Locale = (typeof i18n)['locales'][number];
