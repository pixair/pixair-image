import { PixairizeOptions } from "./pixairize-options";

/**
 * Find and transform images inside a web page.
 *
 * @param options PixairizeOptions Used options during the transformation.
 */
export function pixairize(options: PixairizeOptions) {
    document.querySelectorAll<HTMLElement>(options.selector).forEach(imageElement => {
        const srcElement = imageElement.getAttribute(options.source) || '';
        var parser = document.createElement('a');
        parser.href = srcElement;

        let host = options.host.replace(/\/$/, "")
        const customPixairHost = imageElement.dataset.pixairHost;
        if (customPixairHost) {
            host = customPixairHost.replace(/\/$/, "")
            imageElement.removeAttribute('data-pixair-host')
        }

        imageElement.removeAttribute(options.source);
        imageElement.setAttribute('src', host + parser.pathname);
    });
}
