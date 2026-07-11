import type { ContactLink } from './types/ContactLink';

export const email = 'steven.pribilinskiy@gmail.com';

export const contactLinks: ContactLink[] = [
  {
    platform: 'GitHub',
    label: 'github.com/steven-pribilinskiy',
    href: 'https://github.com/steven-pribilinskiy',
    external: true,
  },
  {
    platform: 'LinkedIn',
    label: 'linkedin.com/in/pribilinskiy',
    href: 'https://www.linkedin.com/in/pribilinskiy/',
    external: true,
  },
  {
    platform: 'npm',
    label: 'npmjs.com/~stevenp',
    href: 'https://www.npmjs.com/~stevenp',
    external: true,
  },
  {
    platform: 'X',
    label: 'x.com/pribilinskiy',
    href: 'https://x.com/pribilinskiy',
    external: true,
  },
  {
    platform: 'Email',
    label: email,
    href: `mailto:${email}`,
    external: false,
  },
];
