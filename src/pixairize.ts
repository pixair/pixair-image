/**
 * A set of options to customize the pixairize function to fit your needs.
 */
 export interface PixairizeOptions {

    /**
     * The selector used to retrieve and transform images.
     */
    selector: string;

    host: string;
    originalAttribute: string;
}

export const defaultOptions: PixairizeOptions = {
    selector: 'img',
    host: 'https://api.pixair.io/',
    originalAttribute: 'pix',
};

/**
 * Find and transform images inside a web page.
 *
 * @param options PixairizeOptions Used options during the transformation.
 */
export function pixairize(options: PixairizeOptions) {
    document.querySelectorAll(options.selector).forEach(imageElement => {
        let srcElement = imageElement.getAttribute(options.originalAttribute);
        imageElement.removeAttribute(options.originalAttribute);

        srcElement = options.host + srcElement

        imageElement.setAttribute('src', srcElement);
    });
}
