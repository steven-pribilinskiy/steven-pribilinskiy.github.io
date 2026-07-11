import type { SessionLine } from './SessionLine';

export type HeroContent = {
  kicker: string;
  headlineLead: string;
  headlineEmphasis: string;
  dek: string;
  status: string;
  sessionCaption: string;
  sessionLines: SessionLine[];
};
