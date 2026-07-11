export type SessionLine =
  | { kind: 'prompt'; command: string }
  | { kind: 'field'; key: string; value: string; comment?: string }
  | { kind: 'cursor' };
