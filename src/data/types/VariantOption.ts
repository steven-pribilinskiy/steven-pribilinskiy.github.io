import type { ToneOption } from './ToneOption';

export type VariantOption = {
  id: string;
  label: string;
  description: string;
  /** First tone of each scheme is that scheme's default. */
  tones: ToneOption[];
};
