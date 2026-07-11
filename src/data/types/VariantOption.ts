import type { ToneOption } from './ToneOption';

export type VariantOption = {
  id: string;
  label: string;
  description: string;
  tones: ToneOption[];
  /** Tone ids resolved when the tone choice is "system": [light, dark]. */
  systemPair: [string, string];
};
