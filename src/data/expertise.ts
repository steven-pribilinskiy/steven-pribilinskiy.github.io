import type { ExpertiseArea } from './types/ExpertiseArea';

export const expertise: ExpertiseArea[] = [
  {
    title: 'Developer tooling & DX',
    description:
      'Element inspectors, script runners, proxies — tools that remove friction at the exact point engineers feel it.',
    artifacts: 'inspectors · CLIs · proxies',
  },
  {
    title: 'Agentic AI infrastructure',
    description:
      'Harnesses, knowledge bases, and monitoring that put fleets of coding agents to work on real codebases.',
    artifacts: 'harnesses · pipelines · dashboards',
  },
  {
    title: 'Micro-frontend platforms',
    description:
      'Module-federation architecture at product scale: manifests, shared dependencies, independent deploys.',
    artifacts: 'federation · manifests · CI',
  },
  {
    title: 'Local-first full stack',
    description:
      'Docker Compose, Traefik, and local TLS — production-shaped environments that run entirely on a laptop.',
    artifacts: 'compose · traefik · TLS',
  },
  {
    title: 'Cross-platform & hardware',
    description:
      'Desktop apps, browser extensions, and Stream Deck integrations that meet people where they already work.',
    artifacts: 'Tauri · extensions · Stream Deck',
  },
];
