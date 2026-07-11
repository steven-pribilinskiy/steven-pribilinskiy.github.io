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
  },
  {
    id: 'terminal',
    label: 'Terminal',
    description: 'Monospace session, phosphor glow',
    tones: [
      { id: 'daylight', label: 'Daylight', scheme: 'light' },
      { id: 'phosphor', label: 'Phosphor', scheme: 'dark' },
      { id: 'amber', label: 'Amber', scheme: 'dark' },
    ],
  },
  {
    id: 'blueprint',
    label: 'Blueprint',
    description: 'Technical drawing on grid paper',
    tones: [
      { id: 'drafting', label: 'Drafting', scheme: 'light' },
      { id: 'cyanotype', label: 'Cyanotype', scheme: 'dark' },
    ],
  },
];

/**
 * Compact per-variant map consumed by the pre-paint inline script and the
 * popover: tone ids grouped by scheme (first entry = that scheme's default).
 */
export const appearanceMap = Object.fromEntries(
  variants.map((variant) => [
    variant.id,
    {
      light: variant.tones.filter((tone) => tone.scheme === 'light').map((tone) => tone.id),
      dark: variant.tones.filter((tone) => tone.scheme === 'dark').map((tone) => tone.id),
    },
  ]),
);

export const storageKeys = {
  variant: 'appearance:variant',
  scheme: 'appearance:scheme',
  tone: (variantId: string, scheme: 'light' | 'dark') => `appearance:tone:${variantId}:${scheme}`,
};
