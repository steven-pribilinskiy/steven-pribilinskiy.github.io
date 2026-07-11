import type { HeroContent } from './types/HeroContent';

export const hero: HeroContent = {
  kicker: 'Senior Staff Engineer · Cloudbeds · Budapest',
  headlineLead: 'Building tools for people who',
  headlineEmphasis: 'ship.',
  dek: 'Developer tooling, agentic-AI infrastructure, and micro-frontend platforms — built end to end, and used every day by the person who built them.',
  status: 'shipping',
  sessionCaption: 'steven@budapest — zsh',
  sessionLines: [
    { kind: 'prompt', command: 'whoami' },
    { kind: 'field', key: 'role', value: 'Senior Staff Engineer' },
    { kind: 'field', key: 'company', value: 'Cloudbeds' },
    { kind: 'field', key: 'focus', value: 'developer tooling · agentic AI · micro-frontends' },
    { kind: 'field', key: 'stack', value: 'TypeScript · Bun · Go · Rust' },
    { kind: 'field', key: 'shipped', value: '30+ projects', comment: '# last 6 months' },
    { kind: 'cursor' },
  ],
};
