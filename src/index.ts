import { pixairize, defaultOptions, PixairizeOptions } from './pixairize';

const options: PixairizeOptions = (window as any).options;

const resolvedOptions = { ...defaultOptions, ...options };

pixairize(resolvedOptions);
