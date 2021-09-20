import { PixairizeOptions } from "./pixairize-options";

const config: PixairizeOptions = {
    selector: 'img[data-pixair-src]',
    api: 'https://api.pixair.io/images',
    source: 'data-pixair-src',
    quality: 75
};

export default config;
