import { PixairizeOptions } from "./pixairize-options";

/**
 * Find and transform images inside a web page.
 *
 * @param options PixairizeOptions Used options during the transformation.
 */
export function pixairize(options: PixairizeOptions) {
    document.querySelectorAll<HTMLElement>(options.selector).forEach(imageElement => {
        const srcElement = imageElement.getAttribute(options.source) || '';
        const parser = document.createElement('a');
        parser.href = srcElement;

        let width = imageElement.getAttribute('width');
        let height = imageElement.getAttribute('height');

        if (!width || !height) return;

        let apiUrl = options.api;
        const customPixairApi = imageElement.dataset.pixairApi;
        if (customPixairApi) {
            imageElement.removeAttribute('data-pixair-api');
            apiUrl = customPixairApi;
        }

        let quality = options.quality;
        const customQuality = imageElement.dataset.pixairQuality;
        if (customQuality) {
            imageElement.removeAttribute('data-pixair-quality');
            quality = parseInt(customQuality);
        }

        imageElement.removeAttribute(options.source);
        imageElement.setAttribute('src', `${apiUrl}?url=${srcElement}&w=${width}&q=${quality}`);
    });
}
