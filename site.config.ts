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
        primary: '#7b3f32',
        background: '#f5efdf',
        surface: '#ece2cd',
        text: '#302b25',
        muted: '#6f665b',
        border: '#c8baa0',
      },
      dark: {
        primary: '#d8aa8f',
        background: '#211d19',
        surface: '#2b2621',
        text: '#eee3cf',
        muted: '#b9aa96',
        border: '#574c40',
      },
    },
    typography: {
      body: '"EB Garamond", Garamond, "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif',
      heading: 'Kalam, "Segoe Print", "Bradley Hand", "Apple Chancery", cursive',
      mono: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
      headingWeight: 600,
    },
    shape: {
      radius: '0.2rem',
      borderWidth: '1px',
      navbarShadow: '0 1px 0 rgb(77 61 43 / 14%)',
    },
    layout: {
      contentWidth: '48rem',
    },
  } satisfies SiteTheme,
} as const;
