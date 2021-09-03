import { PixairizeOptions } from "./pixairize-options";

/**
 * Find and transform images inside a web page.
 *
 * @param options PixairizeOptions Used options during the transformation.
 */
export function pixairize(options: PixairizeOptions) {
    document.querySelectorAll(options.selector).forEach(imageElement => {
        const srcElement = imageElement.getAttribute(options.originalAttribute) || '';
        var parser = document.createElement('a');
        parser.href = srcElement;

        const host = options.host.replace(/\/$/, "")

        imageElement.removeAttribute(options.originalAttribute);
        imageElement.setAttribute('src', host + parser.pathname);
    });
}
