export type Stat = {
  value: string;
  accent?: string;
  label: string;
  /** When set, value = current year − since, recomputed client-side so it never goes stale. */
  since?: number;
};
