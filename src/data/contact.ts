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
    platform: 'npm',
    label: 'npmjs.com/~steven-pribilinskiy',
    href: 'https://www.npmjs.com/~steven-pribilinskiy',
    external: true,
  },
  {
    platform: 'Email',
    label: email,
    href: `mailto:${email}`,
    external: false,
  },
];
