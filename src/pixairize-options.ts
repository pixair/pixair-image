/**
 * A set of options to customize the pixairize function to fit your needs.
 */
 export interface PixairizeOptions {

    /**
     * The selector is used to retrieve images inside the page.
     * Only images matching this selector will be transforms
     */
    selector: string;

    /**
     * The hostname of the serveur who will handle the image transformation.
     * 
     * Ex: https://my-domain.pixair.io
     * 
     * ```
     *     <img src="/path/to/image.png" />
     *                 |
     *                 ˅
     *     <img src="https://my-domain.pixair.io/path/to/image.png" />
     * ```
     */
    host: string;

    /**
     * The original attribute where the image path belongs.
     * You can change it for something different from 'data-pixair-src' to ensure that
     * images to optimize are not loaded twice.
     * 
     * Ex: pix
     * 
     * ```
     *     <img data-pixair-src="/path/to/image.png" />
     *                 |
     *                 ˅
     *     <img src="[host]/path/to/image.png" />
     * ```
     */
    source: string;
}
