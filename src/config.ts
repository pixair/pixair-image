import { PixairizeOptions } from './pixairize-options';

const config: PixairizeOptions = {
    production: false,
    selector: 'img[data-pixair-src]',
    project: 'example',
    source: 'data-pixair-src',
    quality: 75
};

export default config;
