import type { VariantOption } from './types/VariantOption';

export const defaultVariantId = 'editorial';

export const variants: VariantOption[] = [
  {
    id: 'editorial',
    label: 'Editorial',
    description: 'Serif magazine page, paper and ink',
    tones: [
      { id: 'paper', label: 'Paper', scheme: 'light' },
      { id: 'ink', label: 'Ink', scheme: 'dark' },
    ],
    systemPair: ['paper', 'ink'],
  },
  {
    id: 'terminal',
    label: 'Terminal',
    description: 'Monospace session, phosphor glow',
    tones: [
      { id: 'phosphor', label: 'Phosphor', scheme: 'dark' },
      { id: 'amber', label: 'Amber', scheme: 'dark' },
      { id: 'daylight', label: 'Daylight', scheme: 'light' },
    ],
    systemPair: ['daylight', 'phosphor'],
  },
  {
    id: 'blueprint',
    label: 'Blueprint',
    description: 'Technical drawing on grid paper',
    tones: [
      { id: 'drafting', label: 'Drafting', scheme: 'light' },
      { id: 'cyanotype', label: 'Cyanotype', scheme: 'dark' },
    ],
    systemPair: ['drafting', 'cyanotype'],
  },
];

/** Compact map consumed by the pre-paint inline script and the popover. */
export const appearanceMap = Object.fromEntries(
  variants.map((variant) => [
    variant.id,
    {
      systemPair: variant.systemPair,
      schemes: Object.fromEntries(variant.tones.map((tone) => [tone.id, tone.scheme])),
    },
  ]),
);

export const storageKeys = {
  variant: 'appearance:variant',
  tone: (variantId: string) => `appearance:tone:${variantId}`,
};
