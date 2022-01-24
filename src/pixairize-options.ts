/**
 * A set of options to customize the pixairize function to fit your needs.
 */
 export interface PixairizeOptions {

    /**
     * Whether the script will be built for production or not.
     */
    production: boolean;

    /**
     * The selector is used to retrieve images inside the page.
     * Only images matching this selector will be transforms
     */
    selector: string;

    /**
     * The endpoint url who will handle the image transformation.
     * 
     * Ex: my-project => https://my-project.pixair.cloud/images
     * 
     * ```
     *     <img src="/path/to/image.png" />
     *                 |
     *                 ˅
     *     <img src="https://my-project.pixair.cloud/images?url=/path/to/image.png" />
     * ```
     */
    project: string;

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
     *     <img src="[api]?url=/path/to/image.png" />
     * ```
     */
    source: string;

    /**
     * The default wanted quality on optimized images.
     */
    quality: number;
}
