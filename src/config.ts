import { PixairizeOptions } from "./pixairize-options";

const config: PixairizeOptions = {
    selector: 'img[data-pixair-src]',
    host: 'https://api.pixair.io/',
    source: 'data-pixair-src'
};

export default config;
