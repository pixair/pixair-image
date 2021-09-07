import { PixairizeOptions } from "./pixairize-options";

const config: PixairizeOptions = {
    selector: 'img[data-pixair-src]',
    host: 'https://api.pixair.io/',
    originalAttribute: 'data-pix'
};

export default config;
