import type { Stat } from './types/Stat';

export const careerStartYear = 2012;

export const stats: Stat[] = [
  {
    value: String(new Date().getFullYear() - careerStartYear),
    accent: '+',
    label: 'years of engineering',
    since: careerStartYear,
  },
  {
    value: '50',
    accent: '+',
    label: 'technologies · frontend to infra',
  },
];
