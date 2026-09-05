export function definePublications(config) {
  return config;
}

const enContents = [
  'docs/en/index.md',
  'docs/en/discover.md',
  'docs/en/framing.md',
  'docs/en/bets.md',
  'docs/en/resolution.md',
  'docs/en/coherence.md',
  'docs/en/design.md',
  'docs/en/practice.md',
  'docs/en/prism-workshop.md',
  'docs/en/summary.md',
];

const frContents = [
  'docs/fr/index.md',
  'docs/fr/discover.md',
  'docs/fr/framing.md',
  'docs/fr/bets.md',
  'docs/fr/resolution.md',
  'docs/fr/coherence.md',
  'docs/fr/design.md',
  'docs/fr/practice.md',
  'docs/fr/prism-workshop.md',
  'docs/fr/summary.md',
];

export default definePublications({
  release: {
    initialVersion: '0.1.0',
  },
  markdown: {
    admonitions: ['design'],
  },
  publications: {
    core: {
      author: 'AleaScript',
      revision: 'Draft',
      license: {
        label: 'CC BY 4.0',
        href: 'https://creativecommons.org/licenses/by/4.0/',
        attribution: {
          title: 'Regard',
          author: 'AleaScript',
          href: null,
        },
      },
      lineage: {
        designedWith: {
          label: 'Resonance',
          href: 'https://aleascript.github.io/resonance/',
        },
        poweredBy: null,
      },
      size: 'A5',
      theme: 'publication/theme.css',
      cover: {
        image: 'static/img/site/regard_mosaic_valid_pips_small_transparent.svg',
        showTitle: true,
        showMetadata: true,
      },
      outputName: 'regard',
      locales: {
        en: {
          title: 'Regard',
          tocTitle: 'Contents',
          contents: enContents,
          outputs: ['pdf'],
        },
        fr: {
          title: 'Regard',
          tocTitle: 'Sommaire',
          contents: frContents,
          outputs: ['pdf'],
        },
      },
    },
  },
});
