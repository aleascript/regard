/**
 * Regard-specific values. The site structure and visual system come
 * from resonance-site-template; project identity lives here.
 */

export type SiteIdentity = {
  logo: string | null;
  favicon: string | null;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type SiteLineage = {
  designedWith: ProjectLink | null;
  poweredBy: ProjectLink | null;
};

export type ContentLicense = {
  label: string;
  href: string;
  attribution: {
    title: string;
    author: string;
    href: string | null;
  };
};

export type ThemePalette = {
  primary: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
};

export type SiteTheme = {
  colors: {
    light: ThemePalette;
    dark: ThemePalette;
  };
  typography: {
    body: string;
    heading: string;
    mono: string;
    headingWeight: number;
  };
  shape: {
    radius: string;
    borderWidth: string;
    navbarShadow: string;
  };
  layout: {
    contentWidth: string;
  };
};

export const site = {
  title: 'Regard',
  tagline: 'A TTRPG framework with a fully playable standard configuration',
  description: 'A TTRPG framework in which fiction determines what matters and can shape how uncertainty is resolved.',
  author: 'AleaScript',
  defaultLocale: 'en',
  locales: {
    en: {
      htmlLang: 'en',
      label: 'English',
    },
    fr: {
      htmlLang: 'fr',
      label: 'Français',
    },
  },
  repository: {
    defaultFullName: 'aleascript/regard',
  },
  identity: {
    logo: 'img/site/regard_mosaic_valid_pips_400.svg',
    favicon: 'img/site/regard_mosaic_valid_pips_400.svg',
  } satisfies SiteIdentity,
  license: {
    label: 'CC BY 4.0',
    href: 'https://creativecommons.org/licenses/by/4.0/',
    attribution: {
      title: 'Regard',
      author: 'AleaScript',
      href: null,
    },
  } satisfies ContentLicense,
  lineage: {
    designedWith: {
      label: 'Resonance',
      href: 'https://aleascript.github.io/resonance/',
    },
    poweredBy: null,
  } as SiteLineage,
  theme: {
    colors: {
      light: {
        primary: '#315f82',
        background: '#f7f9f8',
        surface: '#edf2f2',
        text: '#18242b',
        muted: '#66747c',
        border: '#cbd5d8',
      },
      dark: {
        primary: '#82c7e8',
        background: '#0f171b',
        surface: '#172228',
        text: '#e7f0f2',
        muted: '#98a8af',
        border: '#304049',
      },
    },
    typography: {
      body: '"Atkinson Hyperlegible", "Segoe UI", system-ui, -apple-system, sans-serif',
      heading: '"IBM Plex Sans", "Segoe UI", system-ui, -apple-system, sans-serif',
      mono: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
      headingWeight: 600,
    },
    shape: {
      radius: '0.35rem',
      borderWidth: '1px',
      navbarShadow: '0 1px 0 rgb(24 36 43 / 10%)',
    },
    layout: {
      contentWidth: '50rem',
    },
  } satisfies SiteTheme,
} as const;
